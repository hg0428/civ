import { getDistance2D, Vector2 } from "./shapes.ts";
import {
	calculateSlope,
	getSpeedModifier,
	isPassable,
} from "./terrainUtils.ts";
import { findPath, smoothPath } from "./pathfinding.ts";
import { AcceptsEvents, EventHandler, GameEvent } from "./interactive.ts";
import { GAME_CONFIG, MovementConfig, PathfindingConfig } from "./config.ts";
import { Structure } from "./structure.ts";
import { DropOffLocation, dropOffLocations } from "./dropoff.ts";

interface Physical {
	height: number; // m
	weight: number; // kg
	strength: number; // kg
	speed: number; // m/s
}
class Mental {
	problem_solving: number;
	knowledge: number;
	creativity: number;
}
enum Skill {
	blacksmith,
	mason,
	soldier,
	miner,
	fisher,
	builder,
	lumberjack,
	cook,
}
enum ItemUseType {
	weapon, // Used for attack
	armor, // Used for defense
	constructionTool, // Used for construction
	miningTool, // Used for mining
	choppingTool, // Used for chopping
	fishingTool, // Used for fishing
	food, // Used for eating
	drink, // Used for drinking
	commodity, // Used for trading. Luxury items are also commodities. These may be used for construction or other purposes.
}
class ItemUse {
	type: ItemUseType;
	effectiveness: number; // for a commodity, this is value. For a weapon or armor, this is damage or defense.
	durability: number;
	constructor(type: ItemUseType, effectiveness: number, durability: number) {
		this.type = type;
		this.effectiveness = effectiveness;
		this.durability = durability;
	}
}

class Item {
	name: string;
	uses: ItemUse[];
	weight: number; // kg per each one
	constructor(name: string, uses: ItemUse[], weight: number) {
		this.name = name;
		this.uses = uses;
		this.weight = weight;
	}
}

class StockUnit {
	item: Item;
	count: number;

	constructor(item: Item, count: number) {
		this.item = item;
		this.count = count;
	}
}
interface PersonEvent extends GameEvent {
	targetPosition: Vector2 | null;
}
const MAX_RETRIES = 5;
interface Task {
	type: "mine" | "build";
	target: Structure | null;
}
class Person implements AcceptsEvents {
	physical: Physical;
	mental: Mental;
	position: Vector2;
	targetPosition: Vector2 | null = null; // Target position for movement
	path: Vector2[] = []; // Waypoints for the path
	currentPathIndex: number = 0; // Current index in the path
	isMoving: boolean = false; // Flag to track if person is currently moving
	YOB: number;
	money: number;
	possessions: StockUnit[];
	skills: Map<Skill, number>;
	listeners: { [key: string]: EventHandler[] } = {};
	retries: number = 0;
	overshotFactor: number = 0;
	task: Task;
	constructor(
		physical: Physical,
		mental: Mental,
		position: Vector2,
		YOB: number,
		money: number = 0,
		possessions: StockUnit[] = [],
		skills: Map<Skill, number> = new Map()
	) {
		this.physical = physical;
		this.mental = mental;
		this.position = position;
		this.YOB = YOB;
		this.money = money;
		this.possessions = possessions;
		this.skills = skills;
	}
	setTask(task: Task) {
		this.task = task;
	}
	getTotalCurrentCarryingWeight(): number {
		return this.possessions.reduce(
			(total, stockUnit) => total + stockUnit.count * stockUnit.item.weight,
			0
		);
	}
	// Set a new target position for the person to move to
	setTargetPosition(target: Vector2): void {
		// Find path using A* algorithm
		const path = findPath(this.position, target);

		if (!path || path.length === 0) {
			console.warn("No valid path found to target");
			return;
		}

		// Set target and path
		this.targetPosition = { ...target };
		this.path = path;
		this.currentPathIndex = 0;
		this.isMoving = true;
	}

	update(elapsed: number, gameEvent: GameEvent) {
		// Sort drop off locations by distance
		dropOffLocations.sort(
			(a, b) =>
				getDistance2D(this.position, a.location) -
				getDistance2D(this.position, b.location)
		);

		if (!this.isMoving && this.task) {
			const target = this.task.target;

			if (!target || target.integrity <= 0) {
				this.task = null;
			} else if (this.task.type === "mine") {
				this.handleMiningTask(target, elapsed);
			} else if (this.task.type === "build") {
				this.handleBuildTask(target, elapsed);
			}
		}

		this.updateMovement(elapsed, gameEvent);
	}

	private handleMiningTask(target: Structure, elapsed: number) {
		const isAtDropOff =
			dropOffLocations.length > 0 &&
			getDistance2D(this.position, dropOffLocations[0].location) === 0;

		const isOverburdened =
			this.getTotalCurrentCarryingWeight() >= this.physical.strength * 0.9;
		if (isAtDropOff) {
			for (const stock of this.possessions) {
				dropOffLocations[0].dropMaterial(stock);
			}
			this.possessions = [];
		} else if (
			isOverburdened &&
			!this.isMoving &&
			dropOffLocations.length > 0
		) {
			for (const dropOff of dropOffLocations) {
				const path = findPath(this.position, dropOff.location);
				if (path && path.length > 0) {
					this.setTargetPosition(dropOff.location);
					return;
				}
			}
		}

		if (
			getDistance2D(this.position, target.thing.position) >=
			MovementConfig.ACCEPTABLE_ERROR
		) {
			this.setTargetPosition(target.thing.position);
		} else {
			this.mineTarget(target, elapsed);
		}
	}

	private mineTarget(target: Structure, elapsed: number) {
		if (target.integrity <= 0) {
			target.thing.remove();
			this.task = null;
			return;
		}

		const durability = target.type.durability;
		const strength = this.physical.strength;
		const retrievable = target.type.retrievable;

		const percent = Math.min(
			(elapsed * strength * GAME_CONFIG.GAME_SPEED_MULTIPLIER) / durability,
			target.integrity
		);
		target.integrity -= percent;
		console.log(target.integrity);

		for (let material of target.type.materials) {
			let possession = this.possessions.find((s) => s.item === material.item);
			if (!possession) {
				possession = new StockUnit(material.item, 0);
				this.possessions.push(possession);
			}
			possession.count += material.count * percent * retrievable * target.scale;
		}

		if (target.integrity <= 0) {
			target.thing.remove();
			this.task = null;
		}
	}

	private handleBuildTask(target: Structure, elapsed: number) {
		if (
			getDistance2D(this.position, target.thing.position) >=
			MovementConfig.ACCEPTABLE_ERROR
		) {
			this.setTargetPosition(target.thing.position);
		} else {
			if (target.integrity >= 1) {
				this.task = null; // Structure complete
			}
			// TODO: handle construction.
		}
	}
	// Update the person's position based on their speed and terrain
	// Returns true if the person has reached their destination
	updateMovement(elapsed: number, gameEvent: GameEvent): boolean {
		if (!this.isMoving || !this.targetPosition || this.path.length === 0) {
			return true; // Already at destination
		}
		// Get current waypoint
		const currentWaypoint = this.path[this.currentPathIndex];

		// Calculate direction to waypoint
		const dx = currentWaypoint.x - this.position.x;
		const dy = currentWaypoint.y - this.position.y;
		const distance = getDistance2D(this.position, currentWaypoint);
		// If reached waypoint, move to next or finish
		if (distance < MovementConfig.ACCEPTABLE_ERROR) {
			this.currentPathIndex++;
			if (this.currentPathIndex >= this.path.length) {
				// Reached final destination
				console.log("Reached final destination");
				this.position = { ...this.targetPosition };
				this.isMoving = false;
				this.retries = 0;
				this.targetPosition = null;
				this.path = [];
				this.currentPathIndex = 0;
				this.dispatchEvent({
					...gameEvent,
					type: "arrived",
					targetPosition: this.targetPosition,
				});
				return true;
			}
			return false; // Continue to next waypoint
		}
		const physicalSpeed = this.physical.speed;
		const overshotFactor = this.overshotFactor;
		const position = this.position;
		function calculateMovement(speed: number): Vector2 {
			const totalSpeed =
				physicalSpeed * MovementConfig.BASE_SPEED * speed * (elapsed / 1000) +
				overshotFactor * speed;
			// Normalize direction vector and apply movement
			const dirX = dx / distance;
			const dirY = dy / distance;

			// Calculate new position
			const newX = position.x + dirX * totalSpeed;
			const newY = position.y + dirY * totalSpeed;
			return { x: newX, y: newY };
		}
		let slope: number = 0;
		let speedModifier: number = -1; // set to an impossible speed modifier so change is high initially prior to refinement.
		let newPos: Vector2 = calculateMovement(1);
		let change: number = 1;
		const MAX_ITERATIONS = 10;
		let iteration = 0;
		while (
			change >= PathfindingConfig.ERROR_TOLERANCE &&
			iteration < MAX_ITERATIONS
		) {
			slope = calculateSlope(this.position, newPos);
			let newSpeedModifier = getSpeedModifier(slope);
			change = Math.abs(newSpeedModifier - speedModifier);
			speedModifier = Math.max(
				newSpeedModifier,
				PathfindingConfig.ERROR_TOLERANCE
			);

			newPos = calculateMovement(speedModifier);
			iteration++;
		}
		this.overshotFactor = 0;
		const { x: newX, y: newY } = newPos;

		// Check if new position is passable
		if (isPassable({ x: newX, y: newY }) && speedModifier > 0) {
			// If we overshot the waypoint (i.e. we were on one side of it, now we are on the other), set it to the waypoint
			// Check if we overshot the waypoint
			const passedX =
				(this.position.x < currentWaypoint.x && newX > currentWaypoint.x) ||
				(this.position.x > currentWaypoint.x && newX < currentWaypoint.x);
			const passedY =
				(this.position.y < currentWaypoint.y && newY > currentWaypoint.y) ||
				(this.position.y > currentWaypoint.y && newY < currentWaypoint.y);

			// Calculate overshoot factor (how many times we went past the target)
			const overshootX = passedX
				? Math.abs(
						(newX - currentWaypoint.x) / (currentWaypoint.x - this.position.x)
				  )
				: 0;
			const overshootY = passedY
				? Math.abs(
						(newY - currentWaypoint.y) / (currentWaypoint.y - this.position.y)
				  )
				: 0;
			this.overshotFactor = Math.max(overshootX, overshootY) / speedModifier;

			if (passedX || passedY) {
				// We overshot, snap to the waypoint
				this.position.x = currentWaypoint.x;
				this.position.y = currentWaypoint.y;
			} else {
				// Normal movement
				this.position.x = newX;
				this.position.y = newY;
			}
		} else if (this.retries < MAX_RETRIES) {
			// Position is impassable (water, etc.)
			console.log("Path blocked by impassable terrain. Finding new path...");
			// Find a path to the next waypoint and insert it into the path
			const nextWaypoint = this.path[this.currentPathIndex + 1];
			const newPath = findPath(this.position, nextWaypoint);
			if (newPath) {
				this.path.splice(this.currentPathIndex + 1, 0, ...newPath);
			} else {
				// This means we can't find a path to the next waypoint
				// Recalculate entire path
				const newPath = findPath(this.position, this.targetPosition);
				if (newPath) {
					this.path = newPath;
					this.currentPathIndex = 0;
				}
			}
			this.retries++;
		} else {
			// Max retries reached
			console.log("Max retries reached, giving up");
			this.isMoving = false;
			this.targetPosition = null;
			this.path = [];
			this.currentPathIndex = 0;
			this.retries = 0;
			this.dispatchEvent({
				...gameEvent,
				type: "failed",
				targetPosition: this.targetPosition,
			});
			return true;
		}

		return false; // Still moving
	}
	addEventListener(
		type: string,
		callback: EventHandler | null,
		options?: AddEventListenerOptions | boolean
	): void {
		if (!this.listeners[type]) this.listeners[type] = [];
		if (options && (options as AddEventListenerOptions).once) {
			this.listeners[type].push((event) => {
				callback(event);
				this.removeEventListener(type, callback);
			});
		} else {
			this.listeners[type].push(callback as EventHandler);
		}
	}
	removeEventListener(
		type: string,
		callback: EventHandler | null,
		options?: EventListenerOptions | boolean
	): void {
		this.listeners[type] = this.listeners[type].filter(
			(l: EventHandler) => l !== callback
		);
	}
	dispatchEvent(event: PersonEvent): boolean {
		console.log("Dispatching event:", event);
		if (!this.listeners[event.type]) return false;
		this.listeners[event.type].forEach((l: EventHandler) => l(event));
		return true;
	}
}
const wood = new Item("Wood", [new ItemUse(ItemUseType.commodity, 1, 1)], 20);
const stone = new Item("Stone", [new ItemUse(ItemUseType.commodity, 3, 2)], 80);

export {
	Physical,
	Mental,
	ItemUseType,
	ItemUse,
	Item,
	StockUnit,
	Person,
	Skill,
	wood,
	stone,
};

import { Vector2 } from "./shapes.ts";
import {
	calculateSlope,
	getSpeedModifier,
	isPassable,
} from "./terrainUtils.ts";
import { findPath, smoothPath } from "./pathfinding.ts";
import { AcceptsEvents, EventHandler, GameEvent } from "./interactive.ts";
import { MovementConfig, PathfindingConfig } from "./config.ts";

interface Physical {
	height: number;
	weight: number;
	strength: number;
	speed: number;
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
	constructor(name: string, uses: ItemUse[]) {
		this.name = name;
		this.uses = uses;
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

	// Set a new target position for the person to move to
	setTargetPosition(target: Vector2): void {
		console.log("Setting target position:", target);

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

		console.log(`Path found with ${path.length} waypoints:`, path);
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
		const distance = Math.sqrt(dx * dx + dy * dy);
		const acceptableError = 1;
		// If reached waypoint, move to next or finish
		if (distance < acceptableError) {
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
				physicalSpeed * MovementConfig.BASE_SPEED * (elapsed / 1000) * speed +
				overshotFactor;
			// Normalize direction vector and apply movement
			const dirX = dx / distance;
			const dirY = dy / distance;

			// Calculate new position
			const newX = position.x + dirX * totalSpeed;
			const newY = position.y + dirY * totalSpeed;
			return { x: newX, y: newY };
		}
		let slope: number, speedModifier: number;
		let newPos: Vector2 = calculateMovement(1);
		let change: number = 1;
		while (change >= PathfindingConfig.ERROR_TOLERANCE) {
			slope = calculateSlope(this.position, newPos);
			let newSpeedModifier = getSpeedModifier(slope);
			change = Math.abs(newSpeedModifier - speedModifier);
			speedModifier = Math.max(
				newSpeedModifier,
				PathfindingConfig.ERROR_TOLERANCE
			);

			newPos = calculateMovement(speedModifier);
		}
		this.overshotFactor = 0;
		const { x: newX, y: newY } = newPos;

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
		this.overshotFactor = Math.max(overshootX, overshootY);

		if (passedX || passedY) {
			// We overshot, snap to the waypoint
			this.position.x = currentWaypoint.x;
			this.position.y = currentWaypoint.y;
		} else {
			// Normal movement
			this.position.x = newX;
			this.position.y = newY;
		}

		// // Check if new position is passable
		// if (isPassable({ x: newX, y: newY }) && speedModifier > 0) {
		// 	this.position.x = newX;
		// 	this.position.y = newY;
		// } else if (this.retries < MAX_RETRIES) {
		// 	// Position is impassable (water, etc.)
		// 	console.log("Path blocked by impassable terrain");
		// 	// Find a path to the next waypoint and insert it into the path
		// 	const nextWaypoint = this.path[this.currentPathIndex + 1];
		// 	const newPath = findPath(this.position, nextWaypoint);
		// 	if (newPath) {
		// 		this.path.splice(this.currentPathIndex + 1, 0, ...newPath);
		// 	}
		// 	this.retries++;
		// } else {
		// 	// Max retries reached
		// 	console.log("Max retries reached, giving up");
		// 	this.isMoving = false;
		// 	this.targetPosition = null;
		// 	this.path = [];
		// 	this.currentPathIndex = 0;
		// 	this.retries = 0;
		// 	this.dispatchEvent({
		// 		...gameEvent,
		// 		type: "failed",
		// 		targetPosition: this.targetPosition,
		// 	});
		// 	return true;
		// }

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
const wood = new Item("Wood", [new ItemUse(ItemUseType.commodity, 1, 1)]);
const stone = new Item("Stone", [new ItemUse(ItemUseType.commodity, 3, 2)]);

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

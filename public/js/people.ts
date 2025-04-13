import { Vector2 } from "./shapes.ts";
import {
	calculateSlope,
	getSpeedModifier,
	isPassable,
} from "./terrainUtils.ts";
import { findPath, smoothPath } from "./pathfinding.ts";

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

class Person {
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
	updateMovement(elapsed: number): boolean {
		if (!this.isMoving || !this.targetPosition || this.path.length === 0) {
			return true; // Already at destination
		}

		// Get current waypoint
		const currentWaypoint = this.path[this.currentPathIndex];

		// Calculate direction to waypoint
		const dx = currentWaypoint.x - this.position.x;
		const dy = currentWaypoint.y - this.position.y;
		const distance = Math.sqrt(dx * dx + dy * dy);

		// If reached waypoint, move to next or finish
		if (distance <= 1) {
			this.currentPathIndex++;
			if (this.currentPathIndex >= this.path.length) {
				// Reached final destination
				this.position = { ...this.targetPosition };
				this.isMoving = false;
				this.targetPosition = null;
				this.path = [];
				this.currentPathIndex = 0;
				return true;
			}
			return false; // Continue to next waypoint
		}

		// Calculate slope and get speed modifier
		const slope = calculateSlope(this.position, currentWaypoint);
		const speedModifier = getSpeedModifier(slope);

		// Check if the next position is impassable due to slope
		/*
		if (speedModifier <= 0) {
			// For now, just stop moving - pathfinding will handle this later
			console.log("Path blocked by impassable terrain (too steep)");
			this.isMoving = false;
			this.targetPosition = null;
			this.path = [];
			this.currentPathIndex = 0;
			return true;
		}
		*/

		// Calculate movement speed based on person's speed attribute and terrain
		const baseSpeed = 50; // Base movement speed
		const speedMultiplier = this.physical.speed / 5; // Normalize speed (0-10 range)
		const movementSpeed =
			baseSpeed * speedMultiplier * speedModifier * (elapsed / 1000); // Units per frame

		// Normalize direction vector and apply movement
		const dirX = dx / distance;
		const dirY = dy / distance;

		// Calculate new position
		const newX = this.position.x + dirX * movementSpeed;
		const newY = this.position.y + dirY * movementSpeed;

		// Check if new position is passable
		/*
		if (isPassable({ x: newX, y: newY })) {
			this.position.x = newX;
			this.position.y = newY;
		} else {
			// Position is impassable (water, etc.)
			console.log("Path blocked by impassable terrain");
			this.isMoving = false;
			this.targetPosition = null;
			this.path = [];
			this.currentPathIndex = 0;
			return true;
		}
		*/
		// Trust the pathfinder and update position directly
		this.position.x = newX;
		this.position.y = newY;

		return false; // Still moving
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

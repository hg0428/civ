import { Vector2 } from "./shapes.ts";
import {
	getTerrainHeight,
	isPassable,
	getSpeedModifier,
	calculateSlope,
} from "./terrainUtils.ts";
import { PathfindingConfig, DebugConfig } from "./config.ts";

// Node used in pathfinding
interface PathNode {
	position: Vector2;
	gCost: number; // Cost from start to this node
	hCost: number; // Heuristic cost from this node to end
	fCost: number; // Total cost (gCost + hCost)
	parent: PathNode | null; // Reference to parent node for path reconstruction
}

// Get the fCost (total cost) of a node
function getFCost(node: PathNode): number {
	return node.fCost;
}

function calculateHeuristic(a: Vector2, b: Vector2): number {
	// Optimized octile distance heuristic
	const dx = Math.abs(a.x - b.x);
	const dy = Math.abs(a.y - b.y);
	return Math.max(dx, dy) + (Math.SQRT2 - 1) * Math.min(dx, dy);
}

// Check if two positions are equal
function positionsEqual(a: Vector2, b: Vector2): boolean {
	return a.x === b.x && a.y === b.y;
}

// Find node in array by position
function findNodeByPosition(
	nodes: PathNode[],
	position: Vector2
): PathNode | null {
	for (const node of nodes) {
		if (positionsEqual(node.position, position)) {
			return node;
		}
	}
	return null;
}

// Calculate the movement cost between two adjacent positions
function calculateMovementCost(from: Vector2, to: Vector2): number {
	// Base cost (1.0 for cardinal directions, √2 for diagonals)
	const dx = Math.abs(to.x - from.x);
	const dy = Math.abs(to.y - from.y);
	const baseCost = dx + dy > 1 ? 1.414 : 1.0; // √2 for diagonals

	// Calculate terrain-based cost
	const slope = calculateSlope(from, to);
	const speedModifier = getSpeedModifier(slope);

	// If impassable due to slope, return a very high cost
	if (speedModifier <= 0) {
		return Number.MAX_VALUE;
	}

	// Cost is inversely proportional to speed modifier (slower = higher cost)
	return baseCost * (1 / speedModifier);
}

/**
 * Find a path from start to end position using A* algorithm
 * @param start Starting position
 * @param end Target position
 * @param searchDistanceLimit Maximum search distance (optional)
 * @returns Array of Vector2 positions representing the path, or null if no path exists
 */
export function findPath(
	start: Vector2,
	end: Vector2,
	searchDistanceLimit = PathfindingConfig.DEFAULT_SEARCH_LIMIT
): Vector2[] | null {
	if (DebugConfig.SHOW_PATH_LOGS) {
		console.log(
			`Finding path from (${start.x.toFixed(1)}, ${start.y.toFixed(
				1
			)}) to (${end.x.toFixed(1)}, ${end.y.toFixed(1)})`
		);
	}
	// Round start and end to grid positions for A* calculation
	const startPos: Vector2 = { x: Math.round(start.x), y: Math.round(start.y) };
	const endPos: Vector2 = { x: Math.round(end.x), y: Math.round(end.y) };

	// If start and end are the same position, return simple path
	if (positionsEqual(startPos, endPos)) {
		return [{ x: startPos.x, y: startPos.y }];
	}

	// Check if start or end *grid positions* are impassable (using the positions A* works with)
	if (!isPassable(startPos) || !isPassable(endPos)) {
		if (DebugConfig.SHOW_PATH_LOGS) {
			// Added log for clarity
			console.warn(
				`Start grid pos (${startPos.x}, ${startPos.y}) or end grid pos (${endPos.x}, ${endPos.y}) is impassable (water).`
			);
		}
		return null; // Return null instead of a potentially invalid direct path
	}

	// Data structures for A* algorithm
	const openSet: PathNode[] = [];
	const closedSet: Set<string> = new Set();
	const nodeMap: Map<string, PathNode> = new Map();

	// Helper function to get node key for map
	const getNodeKey = (pos: Vector2): string => `${pos.x},${pos.y}`;

	// Pre-compute neighbor offsets for faster neighbor generation
	const neighborOffsets = [
		{ x: 0, y: 1 }, // North
		{ x: 1, y: 0 }, // East
		{ x: 0, y: -1 }, // South
		{ x: -1, y: 0 }, // West
		{ x: 1, y: 1 }, // Northeast
		{ x: 1, y: -1 }, // Southeast
		{ x: -1, y: -1 }, // Southwest
		{ x: -1, y: 1 }, // Northwest
	];

	// Sort neighbor offsets to prioritize those pointing toward the target
	const directionToTarget = {
		x: endPos.x - startPos.x,
		y: endPos.y - startPos.y,
	};
	const directionMagnitude = Math.sqrt(
		directionToTarget.x * directionToTarget.x +
			directionToTarget.y * directionToTarget.y
	);

	if (directionMagnitude > 0) {
		// Normalize direction vector
		directionToTarget.x /= directionMagnitude;
		directionToTarget.y /= directionMagnitude;

		// Sort offsets by dot product (cosine similarity) with target direction
		neighborOffsets.sort((a, b) => {
			const dotA = a.x * directionToTarget.x + a.y * directionToTarget.y;
			const dotB = b.x * directionToTarget.x + b.y * directionToTarget.y;
			return dotB - dotA; // Higher dot product first (more aligned with target)
		});
	}

	// Create start node and add to open set
	const hCost = calculateHeuristic(startPos, endPos);
	const startNode: PathNode = {
		position: { x: startPos.x, y: startPos.y },
		gCost: 0,
		hCost,
		fCost: hCost,
		parent: null,
	};

	openSet.push(startNode);
	nodeMap.set(getNodeKey(startPos), startNode);

	// Main A* algorithm loop
	let iterations = 0;
	const maxIterations = searchDistanceLimit * 8;

	// Continue until open set is empty or max iterations reached
	while (openSet.length > 0 && iterations < maxIterations) {
		iterations++;

		// Find the node with the lowest f-cost in the open set
		// This is O(n) but for small maps it's faster than maintaining a complex data structure
		let lowestIndex = 0;
		for (let i = 1; i < openSet.length; i++) {
			if (openSet[i].fCost < openSet[lowestIndex].fCost) {
				lowestIndex = i;
			}
		}

		// Get the current node and remove it from the open set
		const currentNode = openSet[lowestIndex];
		openSet.splice(lowestIndex, 1);

		const currentKey = getNodeKey(currentNode.position);

		// Add to closed set
		closedSet.add(currentKey);

		// Check if we've reached the target
		if (positionsEqual(currentNode.position, endPos)) {
			if (DebugConfig.SHOW_PATH_LOGS) {
				console.log(`Path found after ${iterations} iterations`);
			}

			// Reconstruct the path (more efficiently)
			const path: Vector2[] = [];
			let current: PathNode | null = currentNode;

			// Build path in reverse order (more efficient than unshift)
			while (current !== null) {
				path.push({ x: current.position.x, y: current.position.y });
				current = current.parent;
			}

			// Reverse once at the end (more efficient than repeated unshifts)
			path.reverse();

			// Add the exact start and end positions to create a smoother path
			if (path.length > 0) {
				path[0] = { x: start.x, y: start.y };
				path[path.length - 1] = { x: end.x, y: end.y };
			}

			// Apply path smoothing if enabled
			if (PathfindingConfig.PATH_SMOOTHING && path.length > 2) {
				return smoothPath(path);
			}

			return path;
		}

		// Process all 8 neighboring positions using pre-computed offsets
		for (const offset of neighborOffsets) {
			// Create neighbor position
			const neighbor: Vector2 = {
				x: currentNode.position.x + offset.x,
				y: currentNode.position.y + offset.y,
			};
			const neighborKey = getNodeKey(neighbor);

			// Skip if neighbor is in closed set
			if (closedSet.has(neighborKey)) continue;

			// Skip if neighbor is not passable (e.g., water)
			if (!isPassable(neighbor)) continue;

			// Calculate movement cost (diagonal vs. cardinal direction)
			const isDiagonal = offset.x !== 0 && offset.y !== 0;
			if (isDiagonal) {
				const cardinal1 = {
					x: currentNode.position.x + offset.x,
					y: currentNode.position.y,
				};
				const cardinal2 = {
					x: currentNode.position.x,
					y: currentNode.position.y + offset.y,
				};
				if (!isPassable(cardinal1) || !isPassable(cardinal2)) continue;
			}
			let movementCost = isDiagonal ? 1.41421356 : 1.0; // √2 for diagonals

			// Consider terrain for cost calculation
			const slope = calculateSlope(currentNode.position, neighbor);
			const speedModifier = getSpeedModifier(slope);

			// Skip if impassable due to slope
			if (speedModifier <= PathfindingConfig.ERROR_TOLERANCE) {
				continue;
			}

			// Adjust cost based on terrain
			movementCost = movementCost / speedModifier; // Higher cost for difficult terrain

			// Calculate total cost to this neighbor
			const gCost = currentNode.gCost + movementCost;

			// Get existing node from the map
			const existingNode = nodeMap.get(neighborKey);

			if (!existingNode) {
				// Create new node and add to open set
				const hCost = calculateHeuristic(neighbor, endPos);
				const neighborNode: PathNode = {
					position: { x: neighbor.x, y: neighbor.y },
					gCost,
					hCost,
					fCost: gCost + hCost,
					parent: currentNode,
				};
				openSet.push(neighborNode);
				nodeMap.set(neighborKey, neighborNode);
			} else if (gCost < existingNode.gCost) {
				// Update existing node if new path is better
				existingNode.gCost = gCost;
				existingNode.fCost = gCost + existingNode.hCost;
				existingNode.parent = currentNode;

				// If the node is not in the open set, add it back
				if (!openSet.includes(existingNode)) {
					openSet.push(existingNode);
				}
			}
		}
	}

	// If we've reached here, no path was found
	if (DebugConfig.SHOW_PATH_LOGS) {
		console.warn(`No path found after ${iterations} iterations`);
	}
	return null;
}

/**
 * Creates a smoothed path with fewer waypoints
 * @param path Original path with grid points
 * @returns Simplified path
 */
export function smoothPath(path: Vector2[]): Vector2[] {
	if (path.length <= 2) {
		return [...path]; // No need to smooth very short paths
	}

	const smoothedPath: Vector2[] = [];

	// Always include start point
	smoothedPath.push({ ...path[0] });

	let currentIndex = 0;

	while (currentIndex < path.length - 1) {
		const current = path[currentIndex];

		// Look ahead to find the furthest visible point
		let furthestVisibleIndex = currentIndex + 1;

		for (let i = currentIndex + 2; i < path.length; i++) {
			// Check line of sight between current and potential point
			if (hasLineOfSight(current, path[i])) {
				furthestVisibleIndex = i;
			} else {
				break; // Stop when we find a point without line of sight
			}
		}

		// Add the furthest visible point to our smoothed path
		smoothedPath.push({ ...path[furthestVisibleIndex] });
		currentIndex = furthestVisibleIndex;
	}

	return smoothedPath;
}

/**
 * Check if there is a clear line of sight between two points
 * @param start Starting position
 * @param end End position
 * @returns Boolean indicating if there is a clear line of sight
 */
function hasLineOfSight(start: Vector2, end: Vector2): boolean {
	const dx = end.x - start.x;
	const dy = end.y - start.y;
	const distance = Math.sqrt(dx * dx + dy * dy);

	// If points are very close, assume line of sight
	if (distance < 0.1) {
		// Using a small epsilon
		return true;
	}

	// Increase sampling density: Check approx every 0.5 units distance + ensure min steps
	const steps = Math.max(3, Math.ceil(distance * 2)); // Min 3 steps ensures at least 2 intermediate checks

	// Reuse point objects to reduce garbage collection
	const checkPoint: Vector2 = { x: 0, y: 0 };
	const prevPoint: Vector2 = { x: 0, y: 0 };

	// Check points along the line (strictly between start and end)
	for (let i = 1; i < steps; i++) {
		// Loop goes up to steps-1
		const t = i / steps;
		checkPoint.x = start.x + dx * t;
		checkPoint.y = start.y + dy * t;

		// 1. Check if intermediate point is passable (water)
		if (!isPassable(checkPoint)) {
			if (DebugConfig.SHOW_PATH_LOGS) {
				// Optional logging
				console.log(
					`LOS failed: Intermediate point (${checkPoint.x.toFixed(
						1
					)}, ${checkPoint.y.toFixed(1)}) at t=${t.toFixed(2)} is impassable.`
				);
			}
			return false;
		}

		// 2. Check slope between this point and the previous one
		const prevT = (i - 1) / steps; // t for the previous point (or start if i=1)
		prevPoint.x = start.x + dx * prevT;
		prevPoint.y = start.y + dy * prevT;

		const slope = calculateSlope(prevPoint, checkPoint);
		const speedModifier = getSpeedModifier(slope);

		// If slope is impassable
		if (speedModifier <= 0) {
			if (DebugConfig.SHOW_PATH_LOGS) {
				// Optional logging
				console.log(
					`LOS failed: Slope ${slope.toFixed(3)} from (${prevPoint.x.toFixed(
						1
					)}, ${prevPoint.y.toFixed(1)}) to (${checkPoint.x.toFixed(
						1
					)}, ${checkPoint.y.toFixed(1)}) at t=${t.toFixed(
						2
					)} is impassable (modifier ${speedModifier}).`
				);
			}
			return false;
		}
	}

	// If all intermediate points and slopes are fine, line of sight is clear.
	return true;
}

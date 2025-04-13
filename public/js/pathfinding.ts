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
	parent: PathNode | null; // Reference to parent node for path reconstruction
}

// Get the fCost (total cost) of a node
function getFCost(node: PathNode): number {
	return node.gCost + node.hCost;
}

// Calculate heuristic cost (straight-line distance)
function calculateHeuristic(a: Vector2, b: Vector2): number {
	const dx = Math.abs(a.x - b.x);
	const dy = Math.abs(a.y - b.y);
	return Math.sqrt(dx * dx + dy * dy);
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

// Get neighbors for a given position
function getNeighbors(position: Vector2): Vector2[] {
	const neighbors: Vector2[] = [];
	// 8 neighboring positions (including diagonals)
	for (let x = -1; x <= 1; x++) {
		for (let y = -1; y <= 1; y++) {
			// Skip the current position
			if (x === 0 && y === 0) continue;

			// Create neighbor position
			const neighborPos: Vector2 = {
				x: position.x + x,
				y: position.y + y,
			};

			// Check if the neighbor is passable terrain
			if (isPassable(neighborPos)) {
				neighbors.push(neighborPos);
			}
		}
	}
	return neighbors;
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

	// If start and end are very close, return direct path
	const directDistance = Math.sqrt(
		Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
	);

	if (directDistance < PathfindingConfig.CLOSE_DISTANCE) {
		if (DebugConfig.SHOW_PATH_LOGS) {
			console.log("Positions are close, returning direct path");
		}
		return [{ ...start }, { ...end }];
	}

	// Round start and end to grid positions for A* calculation
	const startPos: Vector2 = { x: Math.round(start.x), y: Math.round(start.y) };
	const endPos: Vector2 = { x: Math.round(end.x), y: Math.round(end.y) };

	// If start and end are the same position, return simple path
	if (positionsEqual(startPos, endPos)) {
		if (DebugConfig.SHOW_PATH_LOGS) {
			console.log("Start and end positions are the same");
		}
		return [{ ...startPos }];
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
	// Using Map instead of array for faster lookups
	const openSet: Map<string, PathNode> = new Map();
	const closedSet: Map<string, PathNode> = new Map();

	// Helper function to get node key for map
	const getNodeKey = (pos: Vector2): string => `${pos.x},${pos.y}`;

	// Create start node and add to open set
	const startNode: PathNode = {
		position: { ...startPos },
		gCost: 0,
		hCost: calculateHeuristic(startPos, endPos),
		parent: null,
	};
	openSet.set(getNodeKey(startPos), startNode);

	// Main A* algorithm loop
	let iterations = 0;
	const maxIterations = searchDistanceLimit * 4; // Reasonable limit to prevent infinite loops

	// Continue until open set is empty or max iterations reached
	while (openSet.size > 0 && iterations < maxIterations) {
		iterations++;

		// Get node with lowest f-cost from open set
		let currentNode: PathNode | null = null;
		let lowestFCost = Infinity;
		let currentKey = "";

		// Find the node with the lowest f-cost
		for (const [key, node] of Array.from(openSet.entries())) {
			const fCost = node.gCost + node.hCost;
			if (fCost < lowestFCost) {
				lowestFCost = fCost;
				currentNode = node;
				currentKey = key;
			}
		}

		if (!currentNode) break; // Should never happen, but just in case

		// Remove current node from open set
		openSet.delete(currentKey);

		// Add to closed set
		closedSet.set(currentKey, currentNode);

		// Check if we've reached the target
		if (positionsEqual(currentNode.position, endPos)) {
			if (DebugConfig.SHOW_PATH_LOGS) {
				console.log(`Path found after ${iterations} iterations`);
			}
			// Reconstruct the path
			const path: Vector2[] = [];
			let current: PathNode | null = currentNode;

			while (current !== null) {
				path.unshift({ ...current.position });
				current = current.parent;
			}

			// Add the exact start and end positions to create a smoother path
			if (path.length > 0) {
				path[0] = { ...start };
				path[path.length - 1] = { ...end };
			}

			// Temporarily disable smoothing for debugging
			if (PathfindingConfig.PATH_SMOOTHING && path.length > 2) {
				return smoothPath(path);
			}

			return path;
		}

		// Process all 8 neighboring positions
		for (let dx = -1; dx <= 1; dx++) {
			for (let dy = -1; dy <= 1; dy++) {
				if (dx === 0 && dy === 0) continue; // Skip current position

				// Create neighbor position
				const neighbor: Vector2 = {
					x: currentNode.position.x + dx,
					y: currentNode.position.y + dy,
				};
				const neighborKey = getNodeKey(neighbor);

				// Skip if neighbor is in closed set
				if (closedSet.has(neighborKey)) continue;

				// Skip if neighbor is not passable (e.g., water, mountains)
				if (!isPassable(neighbor)) continue;

				// Calculate movement cost (diagonal vs. cardinal direction)
				const isDiagonal = dx !== 0 && dy !== 0;
				let movementCost = isDiagonal ? 1.414 : 1.0; // √2 for diagonals

				// Consider terrain for cost calculation
				const slope = calculateSlope(currentNode.position, neighbor);
				const speedModifier = getSpeedModifier(slope);

				// Skip if impassable due to slope
				if (speedModifier <= 0) {
					continue;
				}

				// Adjust cost based on terrain
				movementCost = movementCost / speedModifier; // Higher cost for difficult terrain

				// Calculate total cost to this neighbor
				const gCost = currentNode.gCost + movementCost;

				// Check if neighbor is in open set
				const existingNode = openSet.get(neighborKey);

				if (!existingNode) {
					// Add new node to open set
					const neighborNode: PathNode = {
						position: { ...neighbor },
						gCost,
						hCost: calculateHeuristic(neighbor, endPos),
						parent: currentNode,
					};
					openSet.set(neighborKey, neighborNode);
				} else if (gCost < existingNode.gCost) {
					// Update existing node if new path is better
					existingNode.gCost = gCost;
					existingNode.parent = currentNode;
				}
			}
		}
	}

	// If we've reached here, no path was found
	if (DebugConfig.SHOW_PATH_LOGS) {
		console.log(
			`No path found after ${iterations} iterations, returning direct path`
		);
	}
	return [{ ...start }, { ...end }]; // Return direct path as fallback
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

	// Check points along the line (strictly between start and end)
	for (let i = 1; i < steps; i++) {
		// Loop goes up to steps-1
		const t = i / steps;
		const checkPoint: Vector2 = {
			x: start.x + dx * t,
			y: start.y + dy * t,
		};

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
		const prevPoint: Vector2 = {
			x: start.x + dx * prevT,
			y: start.y + dy * prevT,
		};

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

// Function to reconstruct path from cameFrom map

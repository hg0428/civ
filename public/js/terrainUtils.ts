import { Vector2 } from "./shapes.ts";
import { World } from "./land.ts";
import { TerrainConfig, DebugConfig } from "./config.ts";

// Global reference to the world map data
let worldMap: World | null = null;

/**
 * Initialize terrain utilities with world map data
 */
export function initTerrainUtils(world: World): void {
	worldMap = world;
	console.log(
		"Terrain utils initialized with world map:",
		worldMap ? "success" : "failed"
	);
}

/**
 * Get the terrain height at a specific position
 * @param position Position to sample
 * @returns Height value (0-1)
 */
export function getTerrainHeight(position: Vector2): number {
	// Check if worldMap and its heightMap and heightMap.data exist
	if (!worldMap?.heightMap?.data) {
		if (DebugConfig.SHOW_TERRAIN_LOGS) {
			console.warn(
				"World map or height map data not initialized for terrain utilities"
			);
		}
		return 0.5; // Default to middle height for safety
	}

	const heightData = worldMap.heightMap.data;

	const mapHeight = heightData.length;
	const mapWidth = heightData[0]?.length;

	if (!mapWidth || mapHeight === 0) {
		return 0.5; // Map not properly formed
	}

	// Round position to nearest grid integer coordinates
	const gridX = Math.round(position.x);
	const gridY = Math.round(position.y);

	// Clamp coordinates to be within valid map bounds
	const clampedX = Math.max(0, Math.min(gridX, mapWidth - 1));
	const clampedY = Math.max(0, Math.min(gridY, mapHeight - 1));

	// Directly return the height value from the grid, handle potential undefined access
	const height = heightData[clampedY]?.[clampedX];

	// Return the height or a default if it's somehow undefined (shouldn't happen with clamping)
	return height ?? 0.5;
}

/**
 * Check if a position is passable terrain
 * @param position Position to check
 * @returns Boolean indicating if position is passable
 */
export function isPassable(position: Vector2): boolean {
	if (!worldMap?.heightMap?.data) {
		if (DebugConfig.SHOW_TERRAIN_LOGS) {
			console.warn(
				"World map or height map data not initialized for terrain utilities"
			);
		}
		return true; // Default to passable for safety
	}

	const height = getTerrainHeight(position);
	const isWater = height < TerrainConfig.WATER_THRESHOLD; // Check condition

	// Water is too deep (height below water threshold)
	if (isWater) {
		return false;
	}

	return true;
}

/**
 * Calculate slope between two points
 * @param pointA Starting point
 * @param pointB Ending point
 * @returns Slope value (positive for uphill, negative for downhill)
 */
export function calculateSlope(pointA: Vector2, pointB: Vector2): number {
	const heightA = getTerrainHeight(pointA);
	const heightB = getTerrainHeight(pointB);

	// Calculate horizontal distance
	const distance = Math.sqrt(
		Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2)
	);

	// Avoid division by zero
	if (distance === 0) return 0;

	// Calculate slope (rise over run)
	const slope = (heightB - heightA) / distance;

	if (DebugConfig.SHOW_TERRAIN_LOGS && Math.abs(slope) > 0.2) {
		console.log(
			`Slope from (${pointA.x.toFixed(1)}, ${pointA.y.toFixed(
				1
			)}) to (${pointB.x.toFixed(1)}, ${pointB.y.toFixed(1)}): ${slope.toFixed(
				2
			)}`
		);
	}

	return slope;
}

/**
 * Get speed modifier based on slope
 * @param slope Slope value
 * @returns Speed modifier (0-1.5)
 */
export function getSpeedModifier(slope: number): number {
	// Positive slopes (uphill) slow movement
	if (slope > 0) {
		// Gradual uphill
		if (slope < TerrainConfig.GRADUAL_UPHILL_SLOPE) {
			return 1 - slope; // Slow down proportionally
		}
		// Steep uphill
		else if (slope < TerrainConfig.MAX_UPHILL_SLOPE) {
			return (
				TerrainConfig.MAX_UPHILL_PENALTY -
				(slope - TerrainConfig.GRADUAL_UPHILL_SLOPE)
			); // Slow significantly
		}
		// Very steep (climbing)
		else {
			return 0; // Too steep to climb
		}
	}
	// Negative slopes (downhill) initially increase then reduce speed
	else {
		const absSlope = Math.abs(slope);
		// Gentle downhill - speed boost
		if (absSlope < TerrainConfig.GENTLE_DOWNHILL_SLOPE) {
			return (
				1 +
				(absSlope * (TerrainConfig.MAX_DOWNHILL_BOOST - 1)) /
					TerrainConfig.GENTLE_DOWNHILL_SLOPE
			);
		}
		// Moderate downhill - normal speed
		else if (absSlope < TerrainConfig.MODERATE_DOWNHILL_SLOPE) {
			return 1;
		}
		// Steep downhill - slower (careful descent)
		else if (absSlope < TerrainConfig.MAX_DOWNHILL_SLOPE) {
			return (
				1 -
				((absSlope - TerrainConfig.MODERATE_DOWNHILL_SLOPE) *
					(1 - TerrainConfig.STEEP_DOWNHILL_PENALTY)) /
					(TerrainConfig.MAX_DOWNHILL_SLOPE -
						TerrainConfig.MODERATE_DOWNHILL_SLOPE)
			);
		}
		// Cliff - can't move
		else {
			return 0;
		}
	}
}

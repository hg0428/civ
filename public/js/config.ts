/**
 * Game configuration settings that can be easily adjusted for testing
 */

// Terrain thresholds
export const TerrainConfig = {
	// Water threshold (height below this is considered water)
	WATER_THRESHOLD: 0.35,
	MOUNTAIN_THRESHOLD: 0.75,

	UPHILL_MAX_SLOPE: 0.7, // 0.7 slope is max walkable
	UPHILL_MIN_SPEED: 0.05, // 5% of normal speed on steepest hill

	DOWNHILL_BOOST_LIMIT: 0.2, // 0.2 slope = max boost
	DOWNHILL_MAX_SLOPE: 0.58, // Beyond this, speed declines
	DOWNHILL_MAX_BOOST: 3, // 300% boost on gentle slope
	DOWNHILL_MIN_SPEED: 0.15, // 15% of normal on steep descent
	PIXELS_TO_METERS: 15,
	HEIGHT_RANGE: 1500, // in meters
};

// Pathfinding configuration
export const PathfindingConfig = {
	DEFAULT_SEARCH_LIMIT: 500000, // Maximum search distance for A* pathfinding
	PATH_SMOOTHING: false, // Whether to apply path smoothing
	ERROR_TOLERANCE: 0.01, // Tolerance for speed modifier error
};

// Debug settings
export const DebugConfig = {
	SHOW_PATH_LOGS: false, // Show pathfinding logs in console
	SHOW_TERRAIN_LOGS: false, // Show terrain sampling logs
	DRAW_TERRAIN_GRID: false, // Draw terrain grid for debugging
};
export const MovementConfig = {
	BASE_SPEED: 20,
	ACCEPTABLE_ERROR: 1,
};

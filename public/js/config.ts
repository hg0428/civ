/**
 * Game configuration settings that can be easily adjusted for testing
 */

// Terrain thresholds
export const TerrainConfig = {
	// Water threshold (height below this is considered water)
	WATER_THRESHOLD: 0.35,
	MOUNTAIN_THRESHOLD: 0.75,

	UPHILL_MAX_SLOPE: 0.5, // 50% grade is max walkable
	UPHILL_MIN_SPEED: 0.1, // 10% of normal speed on steepest hill

	DOWNHILL_BOOST_LIMIT: 0.1, // ~10% grade = max boost
	DOWNHILL_MAX_SLOPE: 0.4, // Beyond this, speed declines
	DOWNHILL_MAX_BOOST: 1.5, // 50% boost on gentle slope
	DOWNHILL_MIN_SPEED: 0.15, // 15% of normal on steep descent
};

// Pathfinding configuration
export const PathfindingConfig = {
	DEFAULT_SEARCH_LIMIT: 500000, // Maximum search distance for A* pathfinding
	CLOSE_DISTANCE: 0, // Distance below which a direct path is used
	PATH_SMOOTHING: true, // Whether to apply path smoothing
};

// Debug settings
export const DebugConfig = {
	SHOW_PATH_LOGS: true, // Show pathfinding logs in console
	SHOW_TERRAIN_LOGS: false, // Show terrain sampling logs
	DRAW_TERRAIN_GRID: false, // Draw terrain grid for debugging
};

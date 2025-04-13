/**
 * Game configuration settings that can be easily adjusted for testing
 */

// Terrain thresholds
export const TerrainConfig = {
	// Water threshold (height below this is considered water)
	WATER_THRESHOLD: 0.35,

	// Slope thresholds
	MAX_UPHILL_SLOPE: 0.6, // Slopes above this are too steep to climb
	GRADUAL_UPHILL_SLOPE: 0.3, // Gradual uphill starts reducing speed

	// Downhill thresholds
	MAX_DOWNHILL_SLOPE: 0.7, // Slopes steeper than this are cliffs (impassable)
	GENTLE_DOWNHILL_SLOPE: 0.2, // Slopes below this get a speed boost
	MODERATE_DOWNHILL_SLOPE: 0.4, // Normal speed downhill

	// Speed modifiers
	MAX_UPHILL_PENALTY: 0.5, // Minimum speed when climbing
	MAX_DOWNHILL_BOOST: 1.5, // Maximum speed boost on gentle downhills
	STEEP_DOWNHILL_PENALTY: 0.7, // Speed penalty for steep downhills
};

// Pathfinding configuration
export const PathfindingConfig = {
	DEFAULT_SEARCH_LIMIT: 100000, // Maximum search distance for A* pathfinding
	CLOSE_DISTANCE: 0, // Distance below which a direct path is used
	PATH_SMOOTHING: true, // Whether to apply path smoothing
};

// Debug settings
export const DebugConfig = {
	SHOW_PATH_LOGS: true, // Show pathfinding logs in console
	SHOW_TERRAIN_LOGS: false, // Show terrain sampling logs
	DRAW_TERRAIN_GRID: false, // Draw terrain grid for debugging
};

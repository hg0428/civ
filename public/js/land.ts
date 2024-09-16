// Land is made up of two independent layers: substance map, height map.
// Then there are some dependant layers: vegetation map, humidity map, and heat map.
import { ds } from "ds-heightmap";
import { substances, Substance } from "./substance.ts";
import { createNoise2D } from "simplex-noise";

// Use AI map generation?
interface GenerationOptions {
	width: number;
	height: number;
	OCTAVES: number;
	LACUNARITY: number;
	PERSISTENCE: number;
	max: number;
}
function generatePerlinNoise({
	width = 157,
	height = 100,
	OCTAVES = 10,
	LACUNARITY = 2,
	PERSISTENCE = 0.5,
	max = 1,
}) {
	const noise2D = createNoise2D();
	const result: number[][] = [];
	let scale = (width + height) / 2;

	// Generate noise values with extra width for wrapping
	for (let y = 0; y < height; y++) {
		result[y] = [];
		for (let x = 0; x < width; x++) {
			let amplitude = 1;
			let frequency = 1;
			let noiseValue = 0;

			for (let i = 0; i < OCTAVES; i++) {
				const nx = (x / scale) * frequency;
				const ny = (y / scale) * frequency;
				noiseValue += noise2D(nx, ny) * amplitude;

				amplitude *= PERSISTENCE;
				frequency *= LACUNARITY;
			}

			// Normalize to the range [0, 1]
			result[y][x] = ((noiseValue + 1) / 2) * max;
		}
	}

	return { data: result, min: 0, max };
}
export interface Map {
	min: number;
	max: number;
	data: number[][];
}
interface MaterialMap {
	[key: string]: Map;
}
class World {
	width: number;
	height: number;
	materialMap: MaterialMap | null = null;
	heightMap: Map | null = null;
	heatMap: Map | null = null;
	vegetationMap: Map | null = null;
	humidityMap: Map | null = null;
	constructor(
		width: number,
		height: number,
		materialMap: MaterialMap | null = null,
		heightMap: Map | null = null,
		heatMap: Map | null = null,
		vegetationMap: Map | null = null,
		humidityMap: Map | null = null
	) {
		this.width = width;
		this.height = height;
		this.materialMap = materialMap;
		this.heightMap = heightMap;
		this.heatMap = heatMap;
		this.vegetationMap = vegetationMap;
		this.humidityMap = humidityMap;
	}
}

function generateHeightMap(width: number, height: number) {
	// const data = ds({
	// 	width,
	// 	height,
	// 	depth,
	// 	rough,
	// });
	const data = generatePerlinNoise({ width, height, max: 100 });

	return data;
}
function renderHeightMap(heightMap: Map, width: number, height: number) {
	let { min, max, data } = heightMap;
	const range = max - min;
	const colorData = [];
	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			const level = (data[i][j] - min) / range;
			if (level < 0.7) {
				colorData.push(128 * level, 128 * level, 128 + 128 * level, 255);
			} else {
				colorData.push(level * 255, level * 255, level * 255, 255);
			}
		}
	}

	const imageData = new ImageData(
		Uint8ClampedArray.from(colorData),
		width,
		height
	);
	return imageData;
}
function generateMaterialMap(width: number, height: number) {
	let map = {};
	for (let substance of substances) {
		map[substance.name] = generatePerlinNoise({
			width,
			height,
			max: 100 * substance.relative_abundance,
		});
	}

	return map;
}
function generateHeatMap(
	width: number,
	height: number,
	heightMap: Map,
	materialMap: MaterialMap
) {
	// Warmest in the middle, coolest at the top and bottom edges
	// A little randomness. Cooler at higher elevations.

	const heatData = [];
	let heightRange = heightMap.max - heightMap.min;
	for (let y = 0; y < height; y++) {
		heatData[y] = [];
		for (let x = 0; x < width; x++) {
			const z = (heightMap.data[y][x] - heightMap.min) / heightRange;
			const distanceToYMiddle = Math.abs(y - height / 2);
			const level = 1 / (2 * distanceToYMiddle ** 2 + 2) + z / 2;
			heatData[y].push(level * 10);
		}
	}

	return { data: heatData, min: 0, max: 1 };
}
/**
 * Generates all the maps together.
 *
 * @param width - width of the map
 * @param height - height of the map
 * @return description of return value
 */
function generateMap(width: number, height: number) {
	let heightMap = generateHeightMap(width, height);
	// console.log("Generated height map", heightMap);
	let materialMap = generateMaterialMap(width, height);
	// console.log("Generated material map", materialMap);
	let heatMap = generateHeatMap(width, height, heightMap, materialMap);
	// console.log("Generated heat map", heatMap);

	return new World(width, height, materialMap, heightMap, heatMap);
}

export { generateHeightMap, renderHeightMap, generateMap, World, MaterialMap };

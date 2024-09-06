// Land is made up of two independent layers: substance map, height map.
// Then there are some dependant layers: vegetation map, humidity map, and heat map.
import { ds } from "ds-heightmap";
import { substances, Substance } from "./substance.ts";
import { createNoise2D } from "simplex-noise";

// Use AI map generation?

function generateCylindricalHeightmap(
	width = 157,
	height = 100,
	noiseScale = 100,
	octaves = 6,
	scale = 100
) {
	const noise2D = createNoise2D();
	// Create the empty heightmap array
	const terrain = new Array(height);
	for (let y = 0; y < height; y++) {
		terrain[y] = new Array(width);
	}

	// Fill the terrain array with noise values
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			// Generate noise based on x, y, noise scale, and octaves
			let noiseSum = 0;
			let frequency = 1.0;
			let amplitude = 1.0;
			for (let i = 0; i < octaves; i++) {
				noiseSum +=
					noise2D((x * frequency) / noiseScale, (y * frequency) / noiseScale) *
					amplitude;
				frequency *= 2;
				amplitude *= 0.5;
			}

			// Normalize noise to 0.0 - 1.0 range
			// console.log(noiseSum);
			terrain[y][x] = ((noiseSum + 1) / 2) * scale; // Offset for 0-1 range
		}
	}
	// console.log(terrain);
	return { data: terrain, min: 0, max: scale };
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

function generateHeightMap(
	width: number,
	height: number,
	depth = 1000,
	rough = 1
) {
	// const data = ds({
	// 	width,
	// 	height,
	// 	depth,
	// 	rough,
	// });
	const data = generateCylindricalHeightmap(width, height, 100);

	return data;
}
function renderHeightMap(heightMap: Map, width: number, height: number) {
	let { min, max, data } = heightMap;
	// console.log(min, max, data);
	const range = max - min;
	const colorData = [];
	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			const level = (data[i][j] - min) / range;
			colorData.push(level * 255, level * 255, level * 255, 255);
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
		map[substance.name] = generateHeightMap(
			width,
			height,
			100 * substance.relative_abundance
		);
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

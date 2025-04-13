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

interface SimplexNoiseSettings {
	width: number;
	height: number;
	lacunarity?: number;
	persistence?: number;
	octaves?: number;
	wrapsHorizontally?: boolean;
	wrapsVertically?: boolean;
	seed?: number;
}

// Helper functions for the noise
function fade(t: number): number {
	return t * t * t * (t * (t * 6 - 15) + 10);
}

function lerp(a: number, b: number, t: number): number {
	return a + t * (b - a);
}

function grad(hash: number, x: number, y: number): number {
	const h = hash & 7;
	const u = h < 4 ? x : y;
	const v = h < 4 ? y : x;
	return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
}

// The core Simplex Noise function
class SimplexNoise {
	private permutation: number[];

	constructor(seed: number = Math.random() * 65536) {
		this.permutation = this.buildPermutationTable(seed);
	}

	private buildPermutationTable(seed: number): number[] {
		const p = new Uint8Array(256);
		const perm = new Uint8Array(512);

		for (let i = 0; i < 256; i++) {
			p[i] = i;
		}

		for (let i = 255; i > 0; i--) {
			const j = Math.floor((seed = (seed * 16807) % 2147483647) % (i + 1));
			[p[i], p[j]] = [p[j], p[i]];
		}

		for (let i = 0; i < 512; i++) {
			perm[i] = p[i & 255];
		}

		return Array.from(perm);
	}

	public noise2D(x: number, y: number): number {
		const perm = this.permutation;
		const F2 = 0.5 * (Math.sqrt(3) - 1);
		const G2 = (3 - Math.sqrt(3)) / 6;

		const s = (x + y) * F2;
		const i = Math.floor(x + s);
		const j = Math.floor(y + s);

		const t = (i + j) * G2;
		const X0 = i - t;
		const Y0 = j - t;

		const x0 = x - X0;
		const y0 = y - Y0;

		const i1 = x0 > y0 ? 1 : 0;
		const j1 = x0 > y0 ? 0 : 1;

		const x1 = x0 - i1 + G2;
		const y1 = y0 - j1 + G2;
		const x2 = x0 - 1 + 2 * G2;
		const y2 = y0 - 1 + 2 * G2;

		const ii = i & 255;
		const jj = j & 255;

		const gi0 = perm[ii + perm[jj]] % 12;
		const gi1 = perm[ii + i1 + perm[jj + j1]] % 12;
		const gi2 = perm[ii + 1 + perm[jj + 1]] % 12;

		const t0 = 0.5 - x0 * x0 - y0 * y0;
		const n0 = t0 < 0 ? 0 : Math.pow(t0, 4) * grad(gi0, x0, y0);

		const t1 = 0.5 - x1 * x1 - y1 * y1;
		const n1 = t1 < 0 ? 0 : Math.pow(t1, 4) * grad(gi1, x1, y1);

		const t2 = 0.5 - x2 * x2 - y2 * y2;
		const n2 = t2 < 0 ? 0 : Math.pow(t2, 4) * grad(gi2, x2, y2);

		return 70 * (n0 + n1 + n2);
	}
}
function generateSimplexNoise(settings: SimplexNoiseSettings): Map {
	const {
		width,
		height,
		lacunarity = 2.3,
		persistence = 0.6,
		octaves = 7,
		seed = Math.random() * 65536,
	} = settings;
	const noise = new SimplexNoise(seed);
	const noiseValues: number[][] = Array.from({ length: height }, () =>
		Array(width).fill(0)
	);
	const max =
		persistence === 1
			? octaves
			: (1 - Math.pow(persistence, octaves)) / (1 - persistence);
	const min = -max;
	const range = max - min;

	for (let octave = 0; octave < octaves; octave++) {
		const frequency = Math.pow(lacunarity, octave);
		const amplitude = Math.pow(persistence, octave);

		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				const nx = (x / width) * frequency;
				const ny = (y / height) * frequency;
				noiseValues[y][x] += noise.noise2D(nx, ny) * amplitude;
			}
		}
	}
	// Normalize to [0, 1]
	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			noiseValues[y][x] = (noiseValues[y][x] - min) / range;
		}
	}
	return { data: noiseValues, min: 0, max: 1 };
}

// Example usage
const settings: SimplexNoiseSettings = {
	width: 256,
	height: 256,
	lacunarity: 2.0,
	persistence: 0.5,
	octaves: 4,
	wrapsHorizontally: true,
	wrapsVertically: true,
	seed: 12345,
};

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
	const data = generateSimplexNoise({
		width,
		height,
		wrapsHorizontally: true,
		// wrapsVertically: true,
	});

	return data;
}
function renderHeightMap(
	heightMap: Map,
	width: number,
	height: number,
	tintLevels: { threshold: number; color: number[] }[]
) {
	const { min, max, data } = heightMap;
	const range = max - min;
	const colorData = new Uint8ClampedArray(width * height * 4);

	// Sort tint levels in descending order of threshold for early-out optimization
	tintLevels.sort((a, b) => a.threshold - b.threshold);

	let idx = 0;
	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			const level = data[i][j];
			const normalizedLevel = level * 255;

			// Default color (grayscale)
			let r = normalizedLevel;
			let g = normalizedLevel;
			let b = normalizedLevel;

			// Apply tint if applicable
			for (const tint of tintLevels) {
				if (level < tint.threshold) {
					r = tint.color[0] * normalizedLevel;
					g = tint.color[1] * normalizedLevel;
					b = tint.color[2] * normalizedLevel;
					break;
				}
			}

			// Write directly to the array at the correct position
			colorData[idx++] = r;
			colorData[idx++] = g;
			colorData[idx++] = b;
			colorData[idx++] = 255; // Alpha channel
		}
	}
	console.log("Map rendered!");
	return new ImageData(colorData, width, height);
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
	let materialMap = {}; //generateMaterialMap(width, height);
	let heatMap = { min: 0, max: 1, data: [] }; //generateHeatMap(width, height, heightMap, materialMap);

	return new World(width, height, materialMap, heightMap, heatMap);
}

export { generateHeightMap, renderHeightMap, generateMap, World, MaterialMap };

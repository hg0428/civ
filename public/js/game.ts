import { Map, World } from "./land";
import { Drawable, Thing, draw } from "./shapes";
import { InteractiveElement, InteractiveElements } from "./interactive";

// class Game {
// 	layers: {
// 		[key: string]: Thing<any>[];
// 	};
// 	InteractiveElements: InteractiveElement<any>[];

// 	constructor() {
// 		this.layers = {};
// 		this.InteractiveElements = [];
// 	}
// 	Thing(layer: string, options: Partial<Thing<any>> = {}) {
// 		const element = new Thing(options);
// 		// this.InteractiveElements.push(element);
// 		if (!this.layers[layer]) this.layers[layer] = [];
// 		this.layers[layer].push(element);
// 		return element;
// 	}
// 	InteractiveElement(
// 		layer: string,
// 		options: Partial<InteractiveElement<any>> = {}
// 	) {
// 		const element = new InteractiveElement(options);
// 		this.InteractiveElements.push(element);
// 		if (!this.layers[layer]) this.layers[layer] = [];
// 		this.layers[layer].push(element);
// 		return element;
// 	}
// 	renderLayer(layer: string, ctx: CanvasRenderingContext2D) {
// 		if (!this.layers[layer]) return;
// 		for (let element of this.layers[layer]) {
// 			draw(element, ctx);
// 		}
// 	}
// }

export const mapLayer: Drawable[] = [];
export const overlayLayer: Drawable[] = [];

export function renderGround(
	world: World,
	seaLevel = 50,
	width = 157,
	height = 100
) {
	let { min, max, data } = world.heightMap;
	const range = max - min;
	const colorData = [];
	for (let i = 0; i < width; i++) {
		for (let j = 0; j < height; j++) {
			const z = data[j][i];
			const level = (z - min) / range;
			if (z <= seaLevel) {
				colorData.push(level * 200, level * 200, 255 * (level / 2 + 0.5), 255); // It only works if everything is below sea-level.
			} else {
				colorData.push(level * 255, level * 255, level * 255, 255); // This somehow breaks it
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

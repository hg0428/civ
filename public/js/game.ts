import { Map, World } from "./land.ts";
import { Drawable, Thing, draw } from "./shapes.ts";
import { InteractiveElement, InteractiveElements } from "./interactive.ts";

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

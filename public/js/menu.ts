import { mapLayer, overlayLayer } from "./game.ts";
import { GameEvent, InteractiveElement } from "./interactive.ts";
import { People } from "./people.ts";
import { Circle, draw, Drawable, Rectangle, Thing } from "./shapes.ts";

export const activeMenus: Menu[] = [];
export class Menu implements Drawable {
	elements: Drawable[] = [];
	constructor(elements: Drawable[]) {
		this.elements = elements;
	}
	draw(ctx: CanvasRenderingContext2D, elapsed: number, gameEvent: GameEvent) {
		for (let element of this.elements) {
			element.draw(ctx, elapsed, gameEvent);
		}
	}
	remove() {
		for (let element of this.elements) {
			if (element instanceof InteractiveElement) element.remove();
		}
		this.elements = [];
		activeMenus.filter((m) => m !== this);
		mapLayer.filter((m) => m !== this);
		overlayLayer.filter((m) => m !== this);
	}
}

export function renderMenus(
	ctx: CanvasRenderingContext2D,
	elapsed: number,
	gameEvent: GameEvent
) {
	for (let menu of activeMenus) {
		menu.draw(ctx, elapsed, gameEvent);
	}
}

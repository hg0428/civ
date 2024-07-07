import { Menu } from "./menu";
import { Circle, draw, Drawable, Shape, Thing, Vector2 } from "./shapes.ts";

export type EventHandler = (event: GameEvent) => void;
export class InteractiveElement<shape extends Shape> extends Thing<shape> {
	/**
	 * Is the element currently being hovered
	 */
	hovering: boolean = false;
	/**
	 * The listeners of the element
	 */
	listeners: { [key: string]: EventHandler[] } = {};
	/**
	 * Whether of not the element is a map element
	 */
	isMapElement: boolean = false;
	constructor(
		options: {
			isMapElement?: boolean;
		} & ConstructorParameters<typeof Thing<shape>>[0]
	) {
		super(options);
		this.isMapElement = options.isMapElement ?? false;
		InteractiveElements.push(this);
	}
	addEventListener(
		type: string,
		callback: EventHandler | null,
		options?: AddEventListenerOptions | boolean
	): void {
		if (!this.listeners[type]) this.listeners[type] = [];
		this.listeners[type].push(callback as EventHandler);
	}
	removeEventListener(
		type: string,
		callback: EventHandler | null,
		options?: EventListenerOptions | boolean
	): void {
		this.listeners[type].filter((l: EventHandler) => l !== callback);
	}
	dispatchEvent(event: GameEvent): boolean {
		if (!this.listeners[event.type]) return false;
		this.listeners[event.type].forEach((l: EventHandler) => l(event));
		return true;
	}
	remove() {
		super.remove();
		InteractiveElements.splice(InteractiveElements.indexOf(this), 1);
	}
}
export const InteractiveElements: InteractiveElement<any>[] = [];
export interface GameEvent {
	type: string;
	/**
	 * The position of the mouse in canvas coordinates
	 */
	canvasPosition: Vector2;
	/**
	 * The position of the mouse in map coordinates
	 */
	mapPosition: Vector2;
	canvasWidth: number;
	canvasHeight: number;
	mapWidth: number;
	mapHeight: number;
	canvas: HTMLCanvasElement;
	canvasRenderingContext2D: CanvasRenderingContext2D;
	/**
	 * The elapsed time since the last frame in milliseconds
	 */
	elapsed: number;
	mouseButtons: {
		left: boolean;
		right: boolean;
		middle: boolean;
		back: boolean;
		forward: boolean;
	};
	click?: {
		startPosition: Vector2;
		startPositionOnMap: Vector2;
		endPosition: Vector2;
		endPositionOnMap: Vector2;
		startTime: number;
		endTime: number;
		button: string;
		duration: number;
		distanceMoved: number;
	};
}

export function hoverEffect<shape extends Shape>(
	thing: InteractiveElement<shape>,
	maxScale: number = 1.5,
	hoveringTransitionSpeed: number = 1 / 150
) {
	let defaultScale = 1;
	let targetScale = maxScale;
	let currentScale = defaultScale;
	let hovering = false;
	let hoverStartTime: number | null = null;

	// Save the original draw method
	const originalDraw = thing.draw;

	// Override the draw method
	thing.draw = function (
		ctx: CanvasRenderingContext2D,
		elapsed: number,
		gameEvent: GameEvent
	) {
		if (thing.hovering && !hovering) {
			// Start hovering
			hoverStartTime = performance.now();
			hovering = true;
		} else if (!thing.hovering && hovering) {
			// End hovering
			hoverStartTime = null;
			hovering = false;
		}
		let previousScale = currentScale;
		if (hovering && hoverStartTime !== null) {
			// Calculate the scale factor based on hovering transition speed
			let scaleChange = elapsed * hoveringTransitionSpeed;

			// Adjust currentScale towards targetScale
			currentScale = Math.min(currentScale + scaleChange, targetScale);
		} else if (!hovering) {
			// Calculate the scale factor based on shrink transition speed
			let scaleChange = elapsed * hoveringTransitionSpeed;

			// Adjust currentScale back to defaultScale
			currentScale = Math.max(currentScale - scaleChange, defaultScale);
		}

		// Apply the current scale to the shape
		thing.shape.scale(currentScale / previousScale);

		// Call the original draw method with the scaled shape
		originalDraw.call(thing, ctx, elapsed);
	};
}
// TODO: make events completely custom, not including default mouse event properties

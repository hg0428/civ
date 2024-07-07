import { mapLayer, overlayLayer } from "./game.ts";
import { GameEvent } from "./interactive.ts";

export class Vector2 {
	constructor(public x: number, public y: number) {}
}

export class Vector3 extends Vector2 {
	constructor(x: number, y: number, public z: number) {
		super(x, y);
	}
}
export interface Scalable {
	scale(x: number, y?: number): void;
}

export class Ellipse implements Scalable {
	constructor(
		public radiusX: number,
		public radiusY: number,
		public rotation: number = 0
	) {}

	scale(x: number, y: number = x) {
		this.radiusX *= x;
		this.radiusY *= y;
	}
}

export class Circle extends Ellipse {
	constructor(public radius: number) {
		super(radius, radius);
	}

	setRadius(radius: number) {
		super.scale(radius / this.radius);
		this.radius = radius;
	}
}

export class Rectangle {
	ratio: number = 1;
	constructor(public width: number, public height: number) {
		this.ratio = width / height;
	}

	scale(x: number) {
		this.width *= x;
		this.height *= x;
	}
}

export class Square extends Rectangle {
	constructor(public sideLength: number) {
		super(sideLength, sideLength);
	}
}

export class X {
	constructor(
		public lineOneLength: number,
		public lineTwoLength: number,
		public lineWidth: number = 3
	) {}

	scale(x: number) {
		this.lineOneLength *= x;
		this.lineTwoLength *= x;
		this.lineWidth *= x;
	}
}

export type Shape = Ellipse | Circle | Rectangle | Square | X;
export interface Line {
	/**
	 * Start of the line
	 */
	from: Vector2;
	/**
	 * End of the line
	 */
	to: Vector2;
}
export interface Drawable {
	draw(
		ctx: CanvasRenderingContext2D,
		elapsed: number,
		gameEvent: GameEvent
	): void;
}
export class Thing<shape extends Shape> implements Drawable {
	/**
	 * The center position of the thing
	 */
	position: Vector2;
	/**
	 * The shape of the thing
	 */
	shape: shape;
	/**
	 * The fill color of the thing, if applicable
	 */
	fillStyle?: string;
	/**
	 * The stroke color of the thing, if applicable
	 */
	strokeStyle?: string;
	/**
	 * The stroke width of the thing, if applicable
	 */
	strokeWidth?: number;
	/**
	 * Whether or not the thing should be filled
	 */
	fill: boolean = true;
	/**
	 * Whether or not the thing should be stroked
	 */
	stroke: boolean = true;
	/**
	 * The fill rule
	 */
	fillRule: CanvasFillRule = "nonzero";
	/**
	 * Displayed
	 */
	display: boolean = true;
	/**
	 * Determines the shape used to draw the end points of lines.
	 *
	 * `butt` - The ends of lines are squared off at the endpoints. Default value.
	 *
	 * `round` - The ends of lines are rounded.
	 *
	 * `square` - The ends of lines are squared off by adding a box with an equal width and half the height of the line's thickness.
	 */
	lineCap: CanvasLineCap = "butt";
	/**
	 * Determines the shape used to join two line segments where they meet.
	 *
	 * This property has no effect wherever two connected segments have the same direction, because no joining area will be added in this case. Degenerate segments with a length of zero (i.e., with all endpoints and control points at the exact same position) are also ignored.
	 *
	 * There are three possible values for this property: `round`, `bevel`, and `miter`. The default is `miter`.
	 */
	lineJoin: CanvasLineJoin = "miter";
	/**
	 * Sets the miter limit ratio.
	 * A number specifying the miter limit ratio, in coordinate space units. Zero, negative, Infinity, and NaN values are ignored. The default value is 10.0.
	 */
	miterLimit: number = 10;

	constructor(options: Partial<Thing<shape>> = {}) {
		this.position = options.position ?? new Vector2(0, 0);
		this.shape = options.shape ?? (new Circle(10) as shape);
		this.fillStyle = options.fillStyle;
		this.strokeStyle = options.strokeStyle;
		this.strokeWidth = options.strokeWidth;
		this.fill = options.fill ?? true;
		this.stroke = options.stroke ?? true;
		this.fillRule = options.fillRule ?? "nonzero";
		this.display = options.display ?? true;
		this.lineCap = options.lineCap ?? "butt";
		this.lineJoin = options.lineJoin ?? "miter";
		this.miterLimit = options.miterLimit ?? 10;
	}
	draw(ctx: CanvasRenderingContext2D, elapsed: number, gameEvent: GameEvent) {
		if (!this.display) return;
		draw(this, ctx);
	}
	remove() {
		mapLayer.filter((m) => m !== this);
		overlayLayer.filter((m) => m !== this);
	}
}

export function isInBounds<shape extends Shape>(
	point: Vector2,
	thing: Thing<shape>
) {
	if (thing.shape instanceof Circle)
		return (
			(point.x - thing.position.x) ** 2 + (point.y - thing.position.y) ** 2 <
			thing.shape.radius ** 2
		);
	else if (thing.shape instanceof Ellipse) {
		// Get the transformed point relative to the ellipse center
		const transformedPoint = new Vector2(
			(point.x - thing.position.x) * Math.cos(-thing.shape.rotation) -
				(point.y - thing.position.y) * Math.sin(-thing.shape.rotation),
			(point.x - thing.position.x) * Math.sin(-thing.shape.rotation) +
				(point.y - thing.position.y) * Math.cos(-thing.shape.rotation)
		);

		return (
			(transformedPoint.x / thing.shape.radiusX) ** 2 +
				(transformedPoint.y / thing.shape.radiusY) ** 2 <=
			1
		);
	} else if (thing.shape instanceof Rectangle) {
		return (
			point.x >= thing.position.x - thing.shape.width / 2 &&
			point.x <= thing.position.x + thing.shape.width / 2 &&
			point.y >= thing.position.y - thing.shape.height / 2 &&
			point.y <= thing.position.y + thing.shape.height / 2
		);
	} else if (thing.shape instanceof X) {
		// Use an ellipse for bounds check.
		let radius =
			Math.max(thing.shape.lineOneLength, thing.shape.lineTwoLength) / 2;
		return (
			(point.x - thing.position.x) ** 2 + (point.y - thing.position.y) ** 2 <
			radius ** 2
		);
	}
}
export function draw<shape extends Shape>(
	thing: Thing<shape>,
	ctx: CanvasRenderingContext2D
) {
	if (!thing.display) return;
	ctx.beginPath();
	if (thing.fillStyle) ctx.fillStyle = thing.fillStyle;
	if (thing.strokeStyle) ctx.strokeStyle = thing.strokeStyle;
	if (thing.strokeWidth) ctx.lineWidth = thing.strokeWidth;
	if (thing.lineCap) ctx.lineCap = thing.lineCap;
	if (thing.lineJoin) ctx.lineJoin = thing.lineJoin;
	if (thing.miterLimit) ctx.miterLimit = thing.miterLimit;
	if (thing.shape instanceof Ellipse) {
		ctx.ellipse(
			thing.position.x,
			thing.position.y,
			thing.shape.radiusX,
			thing.shape.radiusY,
			thing.shape.rotation,
			0,
			2 * Math.PI
		);
	} else if (thing.shape instanceof Rectangle) {
		ctx.rect(
			thing.position.x - thing.shape.width / 2,
			thing.position.y - thing.shape.height / 2,
			thing.shape.width,
			thing.shape.height
		);
	} else if (thing.shape instanceof X) {
		ctx.lineJoin = "round";
		let sqrt2 = Math.sqrt(2);
		let lineOneSideLength = thing.shape.lineOneLength / sqrt2;
		let lineTwoSideLength = thing.shape.lineTwoLength / sqrt2;
		ctx.moveTo(
			thing.position.x - lineOneSideLength / 2,
			thing.position.y - lineOneSideLength / 2
		);
		ctx.lineTo(
			thing.position.x + lineOneSideLength / 2,
			thing.position.y + lineOneSideLength / 2
		);
		ctx.moveTo(
			thing.position.x - lineTwoSideLength / 2,
			thing.position.y + lineTwoSideLength / 2
		);
		ctx.lineTo(
			thing.position.x + lineTwoSideLength / 2,
			thing.position.y - lineTwoSideLength / 2
		);
	} else {
		console.log("Unknown shape:", thing.shape);
	}
	if (thing.fill) {
		ctx.closePath();
		ctx.fill(thing.fillRule);
	}
	if (thing.stroke) ctx.stroke();
}
export function getDistance2D(a: Vector2, b: Vector2) {
	return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}
export function getDistance3D(a: Vector3, b: Vector3) {
	return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2);
}
// let t: Thing<Square> = {
// 	position: new Vector2(1, 1),
// 	shape: new Square(2),
// };
// console.log("isInBounds:", isInBounds({ x: 1, y: 1 }, t));

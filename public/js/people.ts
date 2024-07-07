import { PRNG, RNG } from "./utils.ts";
import { Circle, Vector2, Thing, Rectangle, X, Drawable } from "./shapes.ts";
import { GameEvent, hoverEffect, InteractiveElement } from "./interactive.ts";
import { activeMenus, Menu } from "./menu.ts";
// EVERYTHING IS ON A 0-100 SCALE!!

const CHANCE_START = 2;
const CHANCE_FACTOR = 2; // EXPONENTIAL
const NUMBER_LEVELS = 33;
const GLOBAL_MAX_DEVIATION = 75;
const DEVIATION_SIZE = GLOBAL_MAX_DEVIATION / 34;

function generateValue(rng: RNG, average: number) {
	const rnd = rng();
	let max_deviation = Math.max(average, 100 - average);
	let deviation: number;
	for (let a = NUMBER_LEVELS - 1; a >= 0; a--) {
		if (rnd % (CHANCE_START * CHANCE_FACTOR ** a) === 0) {
			deviation = DEVIATION_SIZE * (a + 1);
			break;
		}
	}
	if (!deviation) deviation = DEVIATION_SIZE;
	deviation = Math.min(deviation, max_deviation);

	return Math.max(
		0,
		Math.min((rng() % deviation) * 2 - deviation + average, 100)
	);
}

function createPropertySet(properties: string[]) {
	return class PropertySet {
		properties: string[] = properties;
		[key: string]: any;
		constructor(...values: number[]) {
			for (let i = 0; i < properties.length; i++) {
				this[properties[i]] = values[i] ?? 50;
			}
		}
		generateDeviation(rng: RNG): PropertySet {
			let new_values = [];
			for (let i = 0; i < properties.length; i++) {
				new_values.push(generateValue(rng, this[properties[i]]));
			}
			return new PropertySet(...new_values);
		}
		add(other: PropertySet): PropertySet {
			let new_values = [];
			for (let i = 0; i < properties.length; i++) {
				new_values.push(this[properties[i]] + other[properties[i]]);
			}
			return new PropertySet(...new_values);
		}
		subtract(other: PropertySet): PropertySet {
			let new_values = [];
			for (let i = 0; i < properties.length; i++) {
				new_values.push(this[properties[i]] - other[properties[i]]);
			}
			return new PropertySet(...new_values);
		}
		scale(x: number): PropertySet {
			let new_values = [];
			for (let i = 0; i < properties.length; i++) {
				new_values.push(this[properties[i]] * x);
			}
			return new PropertySet(...new_values);
		}
	};
}
const Physical = createPropertySet([
	"age",
	"height",
	"weight",
	"strength",
	"speed",
]);
type Physical = InstanceType<ReturnType<typeof createPropertySet>>;
const Mental = createPropertySet([
	"problem_solving",
	"knowledge",
	"creativity",
]);
type Mental = InstanceType<ReturnType<typeof createPropertySet>>;

class Person {
	first_name: string;
	last_name: string;
	physical: Physical;
	mental: Mental;
	constructor(
		first_name: string,
		last_name: string,
		physical: Physical,
		mental: Mental
	) {
		this.first_name = first_name;
		this.last_name = last_name;
		this.physical = physical;
		this.mental = mental;
	}
}
class People implements Drawable {
	seed: number;
	rng: RNG;
	index: number;
	nationality: Nation;
	quantity: number;
	total: number;
	physical: Physical;
	mental: Mental;
	predefined: Person[];
	location: Vector2;
	element: InteractiveElement<Circle>;
	menu: Menu | null = null;

	constructor(
		nationality: Nation,
		quantity: number,
		average_physical: Physical,
		average_mental: Mental,
		location: Vector2
	) {
		this.nationality = nationality;
		this.quantity = this.total = quantity;
		this.physical = average_physical;
		this.mental = average_mental;
		this.predefined = [];
		this.seed = Math.round(Math.random() * 10 ** 10);
		this.rng = PRNG(this.seed);
		this.index = 0;
		this.location = location;
		this.nationality.groups.push(this);
		this.element = new InteractiveElement({
			position: this.location,
			shape: new Circle(5),
			fillStyle: this.nationality.colors[0],
			strokeStyle: this.nationality.colors[1],
			strokeWidth: 2,
			isMapElement: true,
		});
		hoverEffect(this.element);

		this.element.addEventListener("click", (event: GameEvent) =>
			this.click(event)
		);
	}
	addPerson(person: Person) {
		this.total++;
		this.predefined.push(person);
		this.physical = this.physical
			.scale(this.total - 1)
			.add(person.physical)
			.scale(1 / this.total);
		this.mental = this.mental
			.scale(this.total - 1)
			.add(person.mental)
			.scale(1 / this.total);
	}
	generatePerson() {
		this.index++;
		return new Person(
			"John",
			"Doe",
			this.physical.generateDeviation(this.rng),
			this.mental.generateDeviation(this.rng)
		);
	}
	*getPeople(n = this.quantity) {
		for (let i = 0; i < n; i++) {
			yield this.generatePerson();
		}
	}
	getPerson(n: number) {
		if (this.index > n) this.reset();
		let person: Person;
		while (this.index <= n) {
			person = this.generatePerson();
		}
		return person;
	}
	reset() {
		this.rng = PRNG(this.seed);
		this.index = 0;
	}
	draw(ctx: CanvasRenderingContext2D, elapsed: number, gameEvent: GameEvent) {
		this.element.draw(ctx, elapsed, gameEvent);
	}
	click(event: GameEvent) {
		let ctx = event.canvasRenderingContext2D;
		if (this.menu) return;

		let menuMargin = 100;
		if (event.canvasHeight < 500) menuMargin = 0;

		let box: Thing<Rectangle> = new Thing({
			position: { x: event.canvasWidth / 2, y: event.canvasHeight / 2 },
			shape: new Rectangle(
				event.canvasWidth - menuMargin,
				event.canvasHeight - menuMargin
			),
			fillStyle: "antiquewhite",
			strokeStyle: "blue",
			strokeWidth: 4,
			lineJoin: "round",
		});
		let x = new InteractiveElement({
			position: { x: event.canvasWidth - menuMargin, y: menuMargin },
			shape: new X(50, 50),
			strokeStyle: "red",
			strokeWidth: 8,
			fill: false,
			lineCap: "round",
		});
		hoverEffect(x);

		// Function to create a section displaying properties
		const createPropertySection = (
			ctx: CanvasRenderingContext2D,
			x: number,
			y: number,
			header: string,
			properties: string[],
			values: number[]
		) => {
			ctx.fillStyle = "black";
			let headerSize = 50;
			let textSize = 30;
			let padding = 15;
			let linePadding = 20;
			ctx.font = `${headerSize}px Sans-serif`;
			let offset = padding + headerSize / 2;
			ctx.fillText(header, x + padding, y + offset);
			properties.forEach((property, i) => {
				ctx.font = `${textSize}px Sans-serif`;
				offset += textSize + linePadding;
				ctx.fillText(`${property}: ${values[i]}`, x + 30 + padding, y + offset);
			});
			offset += textSize + linePadding;
			return offset;
		};

		let physicalProperties = this.physical.properties.map(
			(property) => this.physical[property]
		);
		let mentalProperties = this.mental.properties.map(
			(property) => this.mental[property]
		);

		let menu = new Menu([
			box,
			x,
			{
				draw(
					ctx: CanvasRenderingContext2D,
					elapsed: number,
					gameEvent: GameEvent
				) {
					let endOffset = createPropertySection(
						ctx,
						menuMargin,
						menuMargin,
						"Physical:",
						people.physical.properties,
						physicalProperties
					);
					createPropertySection(
						ctx,
						menuMargin,
						menuMargin + endOffset,
						"Mental:",
						people.mental.properties,
						mentalProperties
					);
				},
			},
		]);
		this.menu = menu;
		x.addEventListener("click", () => this.removeMenu());
		activeMenus.push(this.menu);
		return;
	}
	removeMenu() {
		this.menu.remove();
		this.menu = null;
	}
	remove(): void {
		this.element.remove();
		this.menu.remove();
		this.nationality.groups.splice(this.nationality.groups.indexOf(this), 1);
	}
}
class Nation {
	name: string;
	colors: string[];
	groups: People[];
	constructor(name: string, colors: string[]) {
		this.name = name;
		this.colors = colors;
		this.groups = [];
	}
}

const us = new Nation("United States", ["red", "white", "blue"]);
const people = new People(
	us,
	100,
	new Physical(50, 50, 50, 50, 50, 50),
	new Mental(50, 50, 50),
	{ x: 100, y: 100 }
);

// let levels = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// let rng = PRNG();
// for (let i = 0; i < 1_000_000; i++) {
// 	let x = generateValue(rng, 50);
// 	if (x < 10) levels[0]++;
// 	else if (x < 20) levels[1]++;
// 	else if (x < 30) levels[2]++;
// 	else if (x < 40) levels[3]++;
// 	else if (x < 50) levels[4]++;
// 	else if (x < 60) levels[5]++;
// 	else if (x < 70) levels[6]++;
// 	else if (x < 80) levels[7]++;
// 	else if (x < 90) levels[8]++;
// 	else levels[9]++;
// }
// console.log(levels);
// console.log([...people.getPeople(5)]);
// NAMES: https://github.com/aakashkag/People-Name-List/blob/master/US-People-Names/us_people_names.csv

export { Physical, Mental, Person, People, us };

import { PRNG, RNG } from "../public/js/utils.ts";
import {
	Circle,
	Vector2,
	Thing,
	Rectangle,
	X,
	Drawable,
	createLinearGradientFromColors,
} from "../public/js/shapes.ts";
import {
	GameEvent,
	hoverEffect,
	InteractiveElement,
} from "../public/js/interactive.ts";
import { activeMenus, Menu } from "../public/js/menu.ts";
import { overlayLayer } from "../public/js/game.ts";
import { Action } from "../public/js/actionBar.ts";
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

declare function updateSelection(group: People | undefined): void;

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
	gradient: CanvasGradient | null = null;
	currentAction: Action = { type: "idle" };
	isSelected: boolean = false;

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
		this.gradient = null;
		this.element = new InteractiveElement({
			position: this.location,
			shape: new Circle(5),
			stroke: false,
			isMapElement: true,
		});
		hoverEffect(this.element);

		this.element.addEventListener("click", (event: GameEvent) =>
			this.click(event)
		);
		this.element.addEventListener("drag", (event: GameEvent) =>
			this.drag(event)
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
	setGradient(ctx: CanvasRenderingContext2D) {
		this.gradient = createLinearGradientFromColors(
			this.nationality.colors,
			ctx,
			this.element
		);
		this.element.fillStyle = this.gradient;
	}
	draw(ctx: CanvasRenderingContext2D, elapsed: number, gameEvent: GameEvent) {
		if (!this.gradient) {
			this.setGradient(ctx);
		}
		this.element.draw(ctx, elapsed, gameEvent);
		if (this.isSelected) {
			ctx.strokeStyle = "#4a90e2";
			ctx.lineWidth = 3;
			ctx.beginPath();
			ctx.arc(
				this.location.x,
				this.location.y,
				this.element.shape.radius + 5,
				0,
				Math.PI * 2
			);
			ctx.stroke();
		}
	}
	click(event: GameEvent) {
		if (this.menu) return;

		// Toggle selection and update action bar
		this.isSelected = !this.isSelected;

		// Get the action bar from overlay layer

		let menuMargin = 150;
		if (event.canvasHeight < 1000) menuMargin = 0;
		else if (event.canvasHeight < 1500) menuMargin = 50;
		else if (event.canvasHeight < 2000) menuMargin = 100;

		let box: Thing<Rectangle> = new Thing({
			position: { x: event.canvasWidth / 2, y: event.canvasHeight / 2 },
			shape: new Rectangle(
				event.canvasWidth - menuMargin,
				event.canvasHeight - menuMargin
			),
			fillStyle: "antiquewhite",
			strokeStyle: "antiquewhite",
			strokeWidth: 10,
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
		let people = this;
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
						"Average Physical:",
						people.physical.properties,
						physicalProperties
					);
					createPropertySection(
						ctx,
						menuMargin,
						menuMargin + endOffset,
						"Average Mental:",
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
	drag(event: GameEvent) {
		this.location = {
			x: Math.min(Math.max(event.click.endPositionOnMap.x, 0), event.mapWidth),
			y: Math.min(Math.max(event.click.endPositionOnMap.y, 0), event.mapHeight),
		};
		this.element.position = this.location;
		this.setGradient(event.canvasRenderingContext2D);
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
class Nation implements Drawable {
	name: string;
	colors: string[];
	groups: People[];
	constructor(name: string, colors: string[]) {
		this.name = name;
		this.colors = colors;
		this.groups = [];
	}
	draw(
		ctx: CanvasRenderingContext2D,
		elapsed: number,
		gameEvent: GameEvent
	): void {
		this.groups.forEach((group) => group.draw(ctx, elapsed, gameEvent));
	}
}

// Define nations and their colors
const USA = new Nation("USA", ["#CD0039", "#FFFFFF", "#003B79"]);
const Brazil = new Nation("Brazil", [
	"#009B3A",
	"#FFCC29",
	"#002776",
	"#FFFFFF",
]);
const India = new Nation("India", ["#FF9933", "#128807", "#FFFFFF"]);

const China = new Nation("China", ["#DC002E", "#FFED00"]);

// Define physical and mental values for each nation
const averagePhysicalUSA = new Physical(52, 58, 60, 55, 50);

const averageMentalUSA = new Mental(60, 65, 70);

const averagePhysicalBrazil = new Physical(47, 55, 55, 55, 60);
const averageMentalBrazil = new Mental(50, 50, 65);

const averagePhysicalIndia = new Physical(45, 48, 45, 50, 55);
const averageMentalIndia = new Mental(55, 50, 60);

const averagePhysicalChina = new Physical(60, 52, 51, 50, 50);
const averageMentalChina = new Mental(57, 65, 50);

// Instantiate people groups for each nation
const groupUSA = new People(USA, 100, averagePhysicalUSA, averageMentalUSA, {
	x: 100,
	y: 100,
});
const groupBrazil = new People(
	Brazil,
	80,
	averagePhysicalBrazil,
	averageMentalBrazil,
	{ x: 930, y: 192 }
);
const groupIndia = new People(
	India,
	120,
	averagePhysicalIndia,
	averageMentalIndia,
	{ x: 321, y: 730 }
);
const groupChina = new People(
	China,
	125,
	averagePhysicalChina,
	averageMentalChina,
	{ x: 630, y: 570 }
);

const nations: Nation[] = [USA, Brazil, India, China];

// let levels = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// let rng = PRNG();
// for (let i = 0; i < 1_000_000; i++) {
//     let x = generateValue(rng, 50);
//     if (x < 10) levels[0]++;
//     else if (x < 20) levels[1]++;
//     else if (x < 30) levels[2]++;
//     else if (x < 40) levels[3]++;
//     else if (x < 50) levels[4]++;
//     else if (x < 60) levels[5]++;
//     else if (x < 70) levels[6]++;
//     else if (x < 80) levels[7]++;
//     else if (x < 90) levels[8]++;
//     else levels[9]++;
// }
// NAMES: https://github.com/aakashkag/People-Name-List/blob/master/US-People-Names/us_people_names.csv

export { Physical, Mental, Person, People, Nation, nations };

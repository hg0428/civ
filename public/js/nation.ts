import { Person, Physical, Mental, StockUnit } from "./people.ts";
import { Vector2 } from "./shapes.ts";

function normalDistributionRandom(mean: number, stddev: number): number {
	let u = 0,
		v = 0;
	while (u === 0) u = Math.random();
	while (v === 0) v = Math.random();
	return (
		mean + stddev * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
	);
}
export class Nation {
	people: Person[];
	color: [number, number, number, number]; // RGBA format
	name: string;
	isPlayerNation: boolean;
	possessions: StockUnit[];
	money: number;

	constructor(
		name: string,
		color: [number, number, number, number],
		isPlayerNation: boolean = false
	) {
		this.people = [];
		this.color = color;
		this.name = name;
		this.isPlayerNation = isPlayerNation;
		this.possessions = [];
		this.money = 0;
	}

	addPerson(person: Person) {
		this.people.push(person);
	}

	removePerson(person: Person) {
		const index = this.people.indexOf(person);
		if (index !== -1) {
			this.people.splice(index, 1);
		}
	}

	// Create a new person with random attributes and add them to the nation
	createPerson(position: Vector2): Person {
		// Generate random physical attributes
		const physical: Physical = {
			height: normalDistributionRandom(177, 8),
			weight: normalDistributionRandom(82.6, 34.4),
			strength: normalDistributionRandom(5, 2),
			speed: normalDistributionRandom(5, 2),
		};

		// Generate random mental attributes
		const mental = new Mental();
		mental.problem_solving = normalDistributionRandom(5, 2); // 0-10 problem solving
		mental.knowledge = normalDistributionRandom(5, 2); // 0-10 knowledge
		mental.creativity = normalDistributionRandom(5, 2); // 0-10 creativity

		// Current year (for age calculation)
		const currentYear = 1000; // Starting year of the game
		const age = 15 + Math.floor(Math.random() * 60); // 15-75 years old
		const YOB = currentYear - age;

		// Create the person
		const person = new Person(physical, mental, position, YOB);

		// Add to the nation
		this.addPerson(person);

		return person;
	}
}

// Create a player nation with default settings
export function createPlayerNation(): Nation {
	return new Nation("Player Nation", [0, 0.5, 0.8, 1], true); // Blue color for player nation
}

// Nations registry to keep track of all nations in the game
export class NationsRegistry {
	private nations: Nation[] = [];
	private playerNation: Nation | null = null;

	constructor() {}

	addNation(nation: Nation) {
		this.nations.push(nation);
		if (nation.isPlayerNation) {
			this.playerNation = nation;
		}
	}

	getNations(): Nation[] {
		return this.nations;
	}

	getPlayerNation(): Nation | null {
		return this.playerNation;
	}
}

// Singleton instance of the nations registry
export const nationsRegistry = new NationsRegistry();

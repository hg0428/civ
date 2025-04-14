import { Circle, Thing, Vector2 } from "./shapes.ts";
import { Person } from "./people.ts";
import { GameEvent, InteractiveElement, hoverEffect } from "./interactive.ts";
import { actionBar } from "./actionBar.ts";
import { Nation } from "./nation.ts";

// Class to represent a person visually on the map
export class PersonVisual extends InteractiveElement<Circle> {
	private person: Person;
	private nation: Nation;
	private selected: boolean = false;
	private originalRadius: number;

	constructor(person: Person, nation: Nation) {
		// Create a circle to represent the person
		const personRadius = 1; // Increased radius for better visibility and interaction

		super({
			shape: new Circle(personRadius),
			position: person.position,
			fillStyle: `rgba(${nation.color[0] * 255}, ${nation.color[1] * 255}, ${
				nation.color[2] * 255
			}, ${nation.color[3]})`,
			strokeStyle: "white",
			strokeWidth: 0.5,
			isMapElement: true, // This is a map element, so it will be positioned on the map
		});

		this.person = person;
		this.nation = nation;
		this.originalRadius = personRadius;

		// Add hover effect
		hoverEffect(this, 1.3); // Subtle hover effect

		// Add click event listener
		this.addEventListener("click", (event) => {
			this.select();
		});
	}

	// Select this person
	select() {
		// Deselect all other people
		PersonVisualRegistry.deselectAll();

		// Select this person
		this.selected = true;

		// Update the stroke style to indicate selection
		this.strokeStyle = "yellow";
		this.strokeWidth = 0.25;

		// Update the action bar with this person's actions
		actionBar.setSelectedEntity(this.person);

		console.log(`Selected person from ${this.nation.name}`);
		console.log(
			`Person attributes: Strength: ${this.person.physical.strength.toFixed(
				1
			)}, Speed: ${this.person.physical.speed.toFixed(1)}`
		);
	}

	// Deselect this person
	deselect() {
		this.selected = false;
		this.strokeStyle = "white";
		this.strokeWidth = 0.25;

		// If this was the selected entity in the action bar, clear it
		if (actionBar.getSelectedEntity() === this.person) {
			actionBar.setSelectedEntity(null);
		}
	}

	// Draw method override to visualize paths and movement
	draw(ctx: CanvasRenderingContext2D, elapsed: number, gameEvent: any) {
		// If the person is moving, draw their path
		if (this.person.isMoving && this.person.path.length > 0) {
			// Draw line from current position to each waypoint
			ctx.beginPath();
			ctx.moveTo(this.position.x, this.position.y);

			// Draw line to current waypoint
			const currentWaypoint = this.person.path[this.person.currentPathIndex];
			ctx.lineTo(currentWaypoint.x, currentWaypoint.y);

			// Draw line to final destination if different from current waypoint
			if (this.person.currentPathIndex < this.person.path.length - 1) {
				for (
					let i = this.person.currentPathIndex + 1;
					i < this.person.path.length;
					i++
				) {
					ctx.lineTo(this.person.path[i].x, this.person.path[i].y);
				}
			}

			ctx.strokeStyle = "rgba(255, 255, 0, 0.3)";
			ctx.lineWidth = 1;
			ctx.stroke();

			// Draw waypoints
			for (
				let i = this.person.currentPathIndex;
				i < this.person.path.length;
				i++
			) {
				const waypoint = this.person.path[i];
				ctx.beginPath();
				ctx.arc(waypoint.x, waypoint.y, 1, 0, Math.PI * 2);
				ctx.fillStyle =
					i === this.person.currentPathIndex
						? "yellow"
						: "rgba(255, 255, 0, 0.5)";
				ctx.fill();
			}
		}

		// Call the parent draw method
		super.draw(ctx, elapsed, gameEvent);

		// If selected, draw additional indicators
		if (this.selected) {
			// Draw a pulsing ring around the person
			const pulseAmount = 0.2 * Math.sin(Date.now() / 200) + 1.2;
			const pulseRadius = this.shape.radius * pulseAmount;

			ctx.beginPath();
			ctx.arc(this.position.x, this.position.y, pulseRadius, 0, Math.PI * 2);
			ctx.strokeStyle = "rgba(255, 255, 0, 0.5)";
			ctx.lineWidth = 1;
			ctx.stroke();
		}
	}

	// Check if this person is selected
	isSelected(): boolean {
		return this.selected;
	}

	// Get the person represented by this visual
	getPerson(): Person {
		return this.person;
	}

	// Update the position of the visual to match the person
	updatePosition() {
		this.position = this.person.position;
	}

	// Move the person to a new position
	moveTo(position: Vector2) {
		// Set the target position for gradual movement
		this.person.setTargetPosition(position);

		// Log the movement for debugging
		console.log(
			`Person moving to (${position.x.toFixed(0)}, ${position.y.toFixed(0)})`
		);
	}

	// Update the visual position to match the person's current position
	update(elapsed: number, gameEvent: GameEvent) {
		// Update the person's movement
		this.person.updateMovement(elapsed, gameEvent);

		// Update the visual position to match the person's current position
		this.position = { ...this.person.position };
	}
}

// Registry to keep track of all person visuals
export class PersonVisualRegistry {
	private static personVisuals: PersonVisual[] = [];

	// Add a person visual to the registry
	static addPersonVisual(personVisual: PersonVisual) {
		this.personVisuals.push(personVisual);
	}

	// Remove a person visual from the registry
	static removePersonVisual(personVisual: PersonVisual) {
		const index = this.personVisuals.indexOf(personVisual);
		if (index !== -1) {
			this.personVisuals.splice(index, 1);
		}
	}

	// Get all person visuals
	static getPersonVisuals(): PersonVisual[] {
		return this.personVisuals;
	}

	// Deselect all person visuals
	static deselectAll() {
		this.personVisuals.forEach((personVisual) => {
			personVisual.deselect();
		});
	}

	// Create a person visual for a person and add it to the registry
	static createPersonVisual(person: Person, nation: Nation): PersonVisual {
		const personVisual = new PersonVisual(person, nation);
		this.addPersonVisual(personVisual);
		return personVisual;
	}

	// Update all person visuals
	static updateAll(elapsed: number, gameEvent: GameEvent) {
		this.personVisuals.forEach((personVisual) => {
			personVisual.update(elapsed, gameEvent);
		});
	}
}

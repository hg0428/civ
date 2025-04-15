import { Person } from "./people.ts";
import { Structure } from "./structure.ts";

// Shared game state that can be imported by multiple modules
export let selectedAction: string | null = null;
export let selectedPerson: Person | null = null;
export let cursorType: string = "default"; // Track cursor type without changing DOM
export let buildingStructure: Structure | null = null;

// Functions to update the game state
export function setSelectedAction(action: string | null): void {
	selectedAction = action;

	// Update cursor type based on action
	if (action === "Move" || action === "Mine" || action === "AddDropOff") {
		cursorType = "move";
	} else if (action === "Build") {
		cursorType = "build";
	} else {
		cursorType = "default";
	}

	// We no longer set document.body.style.cursor here
	// The cursor will be drawn in the game's render loop
}

export function setSelectedPerson(person: Person | null): void {
	selectedPerson = person;
}

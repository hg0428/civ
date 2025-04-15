import { actionBar } from "./actionBar.ts";
import { selectedAction, setSelectedAction } from "./gameState.ts";
import { GameEvent, InteractiveElement } from "./interactive.ts";
import { ItemUseType, Person, StockUnit, stone, wood } from "./people.ts";
import { Circle, Rectangle, Shape, Thing, Vector2 } from "./shapes.ts";

class StructureType {
	materials: StockUnit[]; // What it takes to construct
	durability: number; // Durability
	toBuild: ItemUseType; // Item that increases speed of construction
	toDestroy: ItemUseType; // Item that increases speed of destruction
	retrievable: number; // The fraction of the structure's resources that can be retrieved upon destruction of that resource.
	update: (
		gameEvent: GameEvent,
		ctx: CanvasRenderingContext2D,
		structure: Structure
	) => void;
	initThing: (options: any) => InteractiveElement<Shape>;
	constructor(
		materials: StockUnit[],
		durability: number,
		toBuild: ItemUseType,
		toDestroy: ItemUseType,
		retrievable: number = 0.5, // Default retrievable fraction is 50%
		initThing: (options: any) => InteractiveElement<Shape>,
		update: (
			gameEvent: GameEvent,
			ctx: CanvasRenderingContext2D,
			structure: Structure
		) => void = () => {}
	) {
		this.materials = materials;
		this.durability = durability;
		this.toBuild = toBuild;
		this.toDestroy = toDestroy;
		this.retrievable = retrievable;
		this.update = update;
		this.initThing = initThing;
	}
}
class Structure {
	type: StructureType;
	integrity: number;
	thing: InteractiveElement<Shape>;
	constructor(type: StructureType, options: any = {}) {
		this.type = type;
		this.integrity = 1; // 100%
		this.thing = type.initThing(options);
		this.thing.addEventListener("click", (event) => {
			console.log("Structure clicked");
			if (selectedAction === "Mine") {
				const selectedEntity = actionBar.getSelectedEntity();
				if (selectedEntity instanceof Person) {
					// Move the person to the clicked location on the map
					selectedEntity.setTargetPosition(this.thing.position);

					// Reset the action and cursor
					setSelectedAction(null);

					selectedEntity.addEventListener(
						"arrived",
						() => {
							selectedEntity.setTask({
								type: "mine",
								target: this,
							});
						},
						{ once: true }
					);
					return;
				}
			}
		});
	}
	draw(ctx: CanvasRenderingContext2D, elapsed: number, gameEvent: GameEvent) {
		this.thing.draw(ctx, elapsed, gameEvent);
		this.type.update(gameEvent, ctx, this);
		if (this.integrity <= 0) {
			this.thing.remove();
		}
	}
}
export { Structure, StructureType };

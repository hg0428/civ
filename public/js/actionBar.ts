import {
	GameEvent,
	InteractiveElement,
	InteractiveElements,
} from "./interactive.ts";
import { Circle, Drawable, Rectangle, Thing, Vector2 } from "./shapes.ts";
import { Person } from "./people.ts";
import { Structure, STRUCTURE_TYPES, StructureType } from "./structure.ts";
import { setSelectedAction } from "./gameState.ts";
import { DropOffLocation } from "./dropoff.ts";
import { Menu } from "./menu.ts";
import { mapLayer, overlayLayer } from "./game.ts";

export interface Action {
	name: string;
	description: string;
	icon?: string;
	execute: () => void;
	available: () => boolean;
}

export class ActionBar {
	private position: Vector2;
	private size: Vector2;
	private actions: Action[] = [];
	private visible: boolean = true;
	private selectedEntity: Person | Structure | DropOffLocation | null = null;
	private actionButtons: InteractiveElement<Rectangle>[] = [];

	constructor() {
		this.position = { x: 0, y: 0 };
		this.size = { x: 300, y: 100 };
		this.updatePosition();
	}

	updatePosition() {
		// Position in bottom left corner
		const canvas = document.getElementById("canvas") as HTMLCanvasElement;
		if (canvas) {
			this.position = {
				x: 20,
				y: canvas.height - this.size.y - 20,
			};
		}
	}

	setSelectedEntity(entity: Person | Structure | DropOffLocation | null) {
		this.selectedEntity = entity;
		this.updateActions();
		// this.visible = entity !== null;
	}

	getSelectedEntity(): Person | Structure | DropOffLocation | null {
		return this.selectedEntity;
	}

	updateActions() {
		this.actions = [];
		this.clearActionButtons();

		if (!this.selectedEntity) {
			this.actions.push({
				name: "+ dropoff",
				description: "Add drop off location",
				execute: () => {
					console.log("Add drop off action selected");
					setSelectedAction("AddDropOff");
				},
				available: () => true,
			});
		} else if (this.selectedEntity instanceof DropOffLocation) {
			let selectedEntity = this.selectedEntity;
			this.actions.push({
				name: "Delete",
				description: "Delete this drop off location",
				execute: () => {
					selectedEntity.remove();
				},
				available: () => true,
			});
		} else if (this.selectedEntity instanceof Person) {
			// Move action
			this.actions.push({
				name: "Move",
				description: "Move this person to a new location",
				execute: () => {
					// Set the selected action to "Move" using our shared state
					setSelectedAction("Move");
					console.log("Move action selected");
					// The actual movement will be handled in the click event
				},
				available: () => true,
			});

			// Mine action
			this.actions.push({
				name: "Mine",
				description: "Assign this person to mine",
				execute: () => {
					console.log("Mine action selected");
					// Implementation will be expanded
					setSelectedAction("Mine");
				},
				available: () => true,
			});

			// Build action
			this.actions.push({
				name: "Build",
				description: "Build a structure",
				execute: () => {
					console.log("Build action selected");
					buildMenu.show();
				},
				available: () => true,
			});
		}

		this.createActionButtons();
	}

	private createActionButtons() {
		const buttonSize = 60;
		const padding = 10;

		this.actions.forEach((action, index) => {
			if (action.available()) {
				const buttonX =
					this.position.x + padding + index * (buttonSize + padding);
				const buttonY = this.position.y + padding;

				const button = new InteractiveElement<Rectangle>({
					shape: new Rectangle(buttonSize, buttonSize),
					position: {
						x: buttonX + buttonSize / 2,
						y: buttonY + buttonSize / 2,
					},
					fillStyle: "rgba(50, 150, 200, 0.8)",
					strokeStyle: "white",
				});
				console.log("Creating button:", action.name);
				button.addEventListener("click", (event: GameEvent) => {
					console.log("click");
					action.execute();
				});

				this.actionButtons.push(button);
			}
		});
	}

	private clearActionButtons() {
		this.actionButtons.forEach((button) => button.remove());
		this.actionButtons = [];
	}

	draw(ctx: CanvasRenderingContext2D) {
		if (!this.visible) return;

		// Draw background
		ctx.fillStyle = "rgba(30, 35, 50, 0.8)";
		ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
		ctx.strokeStyle = "rgba(100, 150, 200, 0.7)";
		ctx.lineWidth = 2;
		ctx.strokeRect(this.position.x, this.position.y, this.size.x, this.size.y);

		// Draw action buttons (visual representation)
		const buttonSize = 60;
		const padding = 10;

		this.actions.forEach((action, index) => {
			if (action.available()) {
				const buttonX =
					this.position.x + padding + index * (buttonSize + padding);
				const buttonY = this.position.y + padding;

				// Draw button background
				ctx.fillStyle = "rgba(50, 100, 150, 0.8)";
				ctx.fillRect(buttonX, buttonY, buttonSize, buttonSize);

				// Draw button border
				ctx.strokeStyle = "rgba(150, 200, 255, 0.9)";
				ctx.lineWidth = 2;
				ctx.strokeRect(buttonX, buttonY, buttonSize, buttonSize);

				// Draw button text
				ctx.fillStyle = "white";
				ctx.font = "bold 16px Arial";
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";
				ctx.fillText(
					action.name,
					buttonX + buttonSize / 2,
					buttonY + buttonSize / 2
				);
			}
		});
	}
}
const MENU_MARGIN = 30;
const MENU_PADDING = 30;
const BUTTON_WIDTH = 100;
const BUTTON_HEIGHT = 100;
const BUTTON_GAP_HORIZONTAL = 30;
const BUTTON_GAP_VERTICAL = 30;
class BuildMenu implements Drawable {
	visible: boolean = false;
	buttons: {
		element: InteractiveElement<Rectangle>;
		structureType: StructureType;
	}[] = [];
	setupButtons() {
		this.buttons = [];
		for (let i = 0; i < STRUCTURE_TYPES.length; i++) {
			let structureType = STRUCTURE_TYPES[i];
			if (!structureType.build) continue;
			// Draw button for the structure
			let button = new InteractiveElement({
				isMapElement: false,
				shape: new Rectangle(BUTTON_WIDTH, BUTTON_HEIGHT),
				fill: true,
				fillStyle: "rgb(220, 200, 150)",
				stroke: false,
				display: this.visible,
			});
			button.addEventListener("click", (event) => {
				console.log("click!!");
				this.hide();
				structureType.build();
			});
			this.buttons.push({ element: button, structureType });
		}
	}
	hide() {
		this.visible = false;
		for (let button of this.buttons) {
			button.element.display = false;
			button.element.active = false;
		}
	}
	show() {
		this.visible = true;
		for (let button of this.buttons) {
			button.element.display = true;
			button.element.active = true;
		}
	}
	draw(ctx: CanvasRenderingContext2D, elapsed: number, gameEvent: GameEvent) {
		if (!this.visible) return;
		// Draw overlay
		ctx.fillStyle = "rgba(75, 75, 125, 0.6)";
		ctx.fillRect(
			MENU_MARGIN,
			MENU_MARGIN,
			gameEvent.canvasWidth - MENU_MARGIN * 2,
			gameEvent.canvasHeight - MENU_MARGIN * 2
		);
		let position = new Vector2(0, 0);
		for (let i = 0; i < this.buttons.length; i++) {
			let button = this.buttons[i];
			// Draw button for the structure
			button.element.position = new Vector2(
				MENU_MARGIN +
					MENU_PADDING +
					(BUTTON_WIDTH + BUTTON_GAP_HORIZONTAL) * position.x +
					BUTTON_WIDTH / 2,
				MENU_MARGIN +
					MENU_PADDING +
					(BUTTON_HEIGHT + BUTTON_GAP_VERTICAL) * position.y +
					BUTTON_HEIGHT / 2
			);

			button.element.draw(ctx, elapsed, gameEvent);
			ctx.fillStyle = "black";
			ctx.font = "bold 16px Arial";
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillText(
				button.structureType.name,
				button.element.position.x,
				button.element.position.y
			);

			position.x++;
			if (
				MENU_MARGIN * 2 +
					MENU_PADDING * 2 +
					(BUTTON_WIDTH + BUTTON_GAP_HORIZONTAL) * position.x >=
				gameEvent.canvasWidth
			) {
				position.y++;
				position.x = 0;
			}
		}
	}
}
export const buildMenu = new BuildMenu();
overlayLayer.push(buildMenu);
export const actionBar = new ActionBar();

import { GameEvent, InteractiveElement } from "./interactive.ts";
import { Circle, Rectangle, Vector2 } from "./shapes.ts";
import { Person } from "./people.ts";
import { Structure } from "./structure.ts";
import { setSelectedAction } from "./gameState.ts";

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
	private visible: boolean = false;
	private selectedEntity: Person | Structure | null = null;
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

	setSelectedEntity(entity: Person | Structure | null) {
		this.selectedEntity = entity;
		this.updateActions();
		this.visible = entity !== null;
	}

	getSelectedEntity(): Person | Structure | null {
		return this.selectedEntity;
	}

	private updateActions() {
		this.actions = [];
		this.clearActionButtons();

		if (!this.selectedEntity) return;

		if (this.selectedEntity instanceof Person) {
			const person = this.selectedEntity;

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

			// Work action
			this.actions.push({
				name: "Work",
				description: "Assign this person to work",
				execute: () => {
					console.log("Work action selected");
					// Implementation will be expanded
				},
				available: () => true,
			});

			// Build action
			this.actions.push({
				name: "Build",
				description: "Build a structure",
				execute: () => {
					console.log("Build action selected");
					// Implementation will be expanded
				},
				available: () => true,
			});
		} else if (this.selectedEntity instanceof Structure) {
			// Structure-specific actions
			this.actions.push({
				name: "Repair",
				description: "Repair this structure",
				execute: () => {
					console.log("Repair action selected");
				},
				available: () =>
					this.selectedEntity instanceof Structure &&
					this.selectedEntity.integrity < 1,
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
					position: { x: buttonX + buttonSize/2, y: buttonY + buttonSize/2 },
					fillStyle: "rgba(50, 150, 200, 0.8)",
					strokeStyle: "white",
				});

				button.addEventListener("click", (event: GameEvent) => {
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

export const actionBar = new ActionBar();

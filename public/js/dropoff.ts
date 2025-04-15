import { actionBar } from "./actionBar.ts";
import { InteractiveElement } from "./interactive.ts";
import { StockUnit } from "./people.ts";
import { Circle } from "./shapes.ts";
import { Vector2 } from "./shapes.ts";

export class DropOffLocation extends InteractiveElement<Circle> {
	stock: StockUnit[] = [];
	location: Vector2;
	constructor(location: Vector2) {
		super({
			shape: new Circle(10),
			position: location,
			fillStyle: "#FF0000",
			strokeStyle: "#000000",
			strokeWidth: 1,
			isMapElement: true,
		});
		this.location = location;
		this.addEventListener("click", (event) => {
			console.log("Dropoff location clicked");
			actionBar.setSelectedEntity(this);
		});
		dropOffLocations.push(this);
	}
	dropMaterial(materials: StockUnit | StockUnit[]) {
		if (Array.isArray(materials)) {
			this.stock.push(...materials);
		} else {
			this.stock.push(materials);
		}
	}

	remove() {
		dropOffLocations.splice(dropOffLocations.indexOf(this), 1);
		super.remove();
	}
}
export const dropOffLocations: DropOffLocation[] = [];

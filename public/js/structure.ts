import {
	Item,
	ItemUse,
	ItemUseType,
	StockUnit,
	stone,
	wood,
} from "./people.ts";
import { Vector2 } from "./shapes.ts";

class StructureType {
	requirements: StockUnit[];
	durability: number;
	toBuild: ItemUseType;
	toDestroy: ItemUseType;

	constructor(
		requirements: StockUnit[],
		durability: number,
		toBuild: ItemUseType,
		toDestroy: ItemUseType
	) {
		this.requirements = requirements;
		this.durability = durability;
		this.toBuild = toBuild;
		this.toDestroy = toDestroy;
	}
}
class Structure {
	type: StructureType;
	integrity: number;
	position: Vector2;
	constructor(type: StructureType, position: Vector2) {
		this.type = type;
		this.integrity = 1; // 100%
		this.position = position;
	}
}
const stoneWallType = new StructureType(
	[new StockUnit(stone, 100)],
	200,
	ItemUseType.miningTool,
	ItemUseType.miningTool
);
const woodWallType = new StructureType(
	[new StockUnit(wood, 100)],
	100,
	ItemUseType.choppingTool,
	ItemUseType.choppingTool
);
const treeType = new StructureType(
	[new StockUnit(wood, 100)],
	100,
	ItemUseType.choppingTool,
	ItemUseType.choppingTool
);
export { Structure, StructureType, stoneWallType, woodWallType, treeType };

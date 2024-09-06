let substances = [];

class Substance {
	name: string;
	render_color: string;
	chemical_formula: string;
	relative_abundance: number;
	constructor(name, render_color, chemical_formula, relative_abundance) {
		this.name = name;
		this.render_color = render_color;
		this.chemical_formula = chemical_formula;
		this.relative_abundance = relative_abundance / 5; // 1 (Very rare) - 5 (Very common)
		substances.push(this);
	}
}

// Common building materials (all common: 4)
// new Substance("Sand", "#F5DD9E", "SiO2", 5);
// new Substance("Clay", "#C67D4A", "Al2Si2O5(OH)4", 4);
// new Substance("Limestone", "#E0C09B", "CaCO3", 4);

// Commonly used metals (varied abundance)
new Substance("Gold", "#FFD700", "Au", 1); // Rare
new Substance("Iron", "#D4D7D8", "Fe", 4); // Abundant
new Substance("Copper", "#B76B1E", "Cu", 3); // Common
new Substance("Silver", "#C0C0C0", "Ag", 2); // Less common than copper

// Gems and jewelry materials (all rare: 1)
new Substance("Diamond", "#FFF", "C", 1);
// new Substance("Ruby", "#DC143C", "Al2O3 (impurities)", 1);
// new Substance("Sapphire", "#007FFF", "Al2O3 (impurities)", 1);
// new Substance("Emerald", "#2F8030", "Be3Al2Si6O18 (impurities)", 1);

// Other useful substances (varied abundance)
// new Substance("Salt (Rock Salt)", "#F0EAEA", "NaCl", 4); // Abundant
// new Substance("Coal", "#1B1B1B", "C (various)", 3); // Common
// new Substance("Sulfur", "#FFFF00", "S", 2); // Less common
// new Substance("Graphite", "#696969", "C", 3); // Common

// Natural materials for tools or art (varied abundance)
// new Substance("Flint", "#191919", "SiO2", 2); // Less common
// new Substance("Obsidian", "#121212", "SiO2, MgO, Fe3O4", 3); // Common
// new Substance("Amber", "#FFC107", "C4H10O", 2); // Less common

// More substances (varied abundance)
// new Substance("Chalk", "#F5F5F5", "CaCO3", 4); // Abundant
// new Substance("Marble", "#FDFEFE", "CaCO3", 3); // Common
// new Substance("Granite", "#C0C0C0", "Varies", 3); // Common
// new Substance("Gypsum", "#C2C2F0", "CaSO4·2H2O", 3); // Common
// new Substance("Mica", "#EFEFEF", "KAl2(AlSi3O10)(OH)2", 2); // Less common
// new Substance("Sandstone", "#F4C430", "SiO2", 4); // Abundant

export { Substance, substances };

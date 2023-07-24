import { Alliance } from "./alliance.model";
import { Faction } from "./faction.model";
import { Units } from "./units.model";

export class Army {
    id = 0;
    name = "";
    faction= "";
    alliance = "";
    units: Units[] = [];

    constructor(name: string, faction: Faction, alliance: Alliance) {
        this.name = name;
        this.faction = faction.name;
        this.alliance = alliance.name;
    }
}
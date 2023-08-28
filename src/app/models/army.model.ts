import { Alliance } from "./alliance.model";
import { Faction } from "./faction.model";
import { Units } from "./units.model";

export class Army {
    idArmy = 0;
    armyName = "";
    faction= "";
    alliance = "";
    units: Units[] = [];

    constructor(name: string, faction: Faction, alliance: Alliance) {
        this.armyName = name;
        this.faction = faction.factionName;
        this.alliance = alliance.allianceName;
    }
}
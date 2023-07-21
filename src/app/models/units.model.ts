import { Faction } from "./faction.model";
export class Units {
    id= 0;
    name = "";
    points = 0;
    faction: Faction;
    constructor(name: string, points: number, faction: Faction) {
        this.name = name;
        this.points = points;
        this.faction = faction;
    }
}
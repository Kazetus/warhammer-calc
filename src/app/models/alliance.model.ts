import { Faction } from "./faction.model";

export class Alliance {
    id = 0;
    allianceName = "";
    faction: Faction[] = [];

    constructor(name: string) {
        this.allianceName = name;
    }
}
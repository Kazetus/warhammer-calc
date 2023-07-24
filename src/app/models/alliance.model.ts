import { Faction } from "./faction.model";

export class Alliance {
    id = 0;
    name = "";
    faction: Faction[] = [];

    constructor(name: string) {
        this.name = name;
    }
}
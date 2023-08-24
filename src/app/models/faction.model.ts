import { Units } from "./units.model";

export class Faction {
    id = 0;
    factionName = "";
    units: Units[] = [];

    constructor(name: string) {
        this.factionName = name;
    }
}
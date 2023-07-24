import { Units } from "./units.model";

export class Faction {
    id = 0;
    name = "";
    units: Units[] = [];

    constructor(name: string) {
        this.name = name;
    }
}
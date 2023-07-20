import { Units } from "./units.model";

export class Army {
    id = 0;
    name = "";
    units: Units[] = [];

    constructor(name: string) {
        this.name = name;
    }
}
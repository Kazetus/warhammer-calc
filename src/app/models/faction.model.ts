import { Alliance } from "./alliance.model";

export class Faction {
    id = 0;
    name = "";
    alliance: Alliance;

    constructor(name: string, alliance: Alliance) {
        this.name = name;
        this.alliance = alliance
    }
}
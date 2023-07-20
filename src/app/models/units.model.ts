export class Units {
    id= 0;
    name = "";
    points = 0;
    faction = "";
    constructor(name: string, points: number, faction: string) {
        this.name = name;
        this.points = points;
        this.faction = faction;
    }
}
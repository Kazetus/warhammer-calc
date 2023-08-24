
export class Units {
    id= 0;
    unitsName = "";
    points = 0;
    nombreFigurine= 0;
    constructor(name: string, points: number, nombreFigurine: number) {
        this.unitsName = name;
        this.points = points;
        this.nombreFigurine = nombreFigurine;
    }
}

export class Units {
    idUnits= 0;
    unitsName = "";
    idArmyUnits = 0;
    points = 0;
    nombreFigurine= 0;
    constructor(name: string, points: number, nombreFigurine: number, idArmyUnits: number) {
        this.unitsName = name;
        this.points = points;
        this.nombreFigurine = nombreFigurine;
        this.idArmyUnits
    }
}
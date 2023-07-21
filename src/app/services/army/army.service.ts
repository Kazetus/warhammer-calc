import { Injectable } from '@angular/core';
import { Army } from 'src/app/models/army.model';
import { Units } from 'src/app/models/units.model';
import { Faction } from 'src/app/models/faction.model';
import { Alliance } from 'src/app/models/alliance.model';
@Injectable({
  providedIn: 'root'
})
export class ArmyService {
  ArmyListsArray: Army[] = [];
  Alliance: Alliance[] =[];
  Faction: Faction[] = [];

  constructor() {
    const army = new Army('Patrouille Orks');
    this.Alliance.push(new Alliance("space Marines"));
    this.Faction.push(new Faction("Space marines", this.Alliance[0]));
    this.Alliance.push(new Alliance("Xenos"));
    this.Faction.push(new Faction("Orks", this.Alliance[0]));
    army.units.push(new Units("Boyz", 170, this.Faction[1]));
    army.units.push(new Units("Kopters de la mort", 115 , this.Faction[1]));
    this.ArmyListsArray.push(army);
    const army2 = new Army('patrouille Space Marines');
    army2.units.push(new Units("Escouade Primaris",250, this.Faction[0]));
    army2.units.push(new Units("Dreanaught", 230, this.Faction[0]));
    this.ArmyListsArray.push(army2);
   }
   getArmy() {
    return this.ArmyListsArray;
   }
   getAlliance() {
    return this.Alliance;
   }
   getFaction() {
    return this.Faction;
   }
   getUnits() {
    let units = [];
    for(let army in this.ArmyListsArray) {
      for(let units in army.units)
    }
   }
}

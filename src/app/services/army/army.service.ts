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
    
    this.Alliance.push(new Alliance("space Marines"));
    this.Faction.push(new Faction("Space marines"));
    this.Alliance.push(new Alliance("Xenos"));
    this.Faction.push(new Faction("Orks"));
    const army = new Army('Patrouille Orks', this.Faction[1], this.Alliance[1]);
    army.units.push(new Units("Boyz", 170));
    army.units.push(new Units("Kopters de la mort", 115));
    this.ArmyListsArray.push(army);
    const army2 = new Army('patrouille Space Marines', this.Faction[0], this.Alliance[0]);
    army2.units.push(new Units("Escouade Primaris",250));
    army2.units.push(new Units("Dreanaught", 230));
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
    for(let i = 0; i < this.ArmyListsArray.length; i++) {
      for(let j=0; j < this.ArmyListsArray[i].units.length; j++) {
        units.push(this.ArmyListsArray[i].units[j]);
      }
    }
    return units;
   }
}

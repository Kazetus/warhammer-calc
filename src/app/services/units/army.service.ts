import { Injectable } from '@angular/core';
import { Army } from 'src/app/models/army.model';
import { Units } from 'src/app/models/units.model';

@Injectable({
  providedIn: 'root'
})
export class ArmyService {
  ArmyListsArray: Army[] = [];

  constructor() {
    const army = new Army('Patrouille Orks');
    army.units.push(new Units("Boyz", 170, "Ork"));
    army.units.push(new Units("Kopters de la mort", 115 ,"Ork"));
    this.ArmyListsArray.push(army);
    const army2 = new Army('patrouille Space Marines');
    army2.units.push(new Units("Escouade Primaris",250, "Space marines"));
    army2.units.push(new Units("Dreanaught", 230, "Space marine"));
    this.ArmyListsArray.push(army2);
   }
   getArmy() {
    return this.ArmyListsArray;
   }
}

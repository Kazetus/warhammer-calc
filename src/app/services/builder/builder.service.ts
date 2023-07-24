import { Injectable } from '@angular/core';
import { Alliance } from 'src/app/models/alliance.model';
import { Faction } from 'src/app/models/faction.model';
import { Units } from 'src/app/models/units.model';

@Injectable({
  providedIn: 'root'
})
export class BuilderService {
  Alliance: Alliance[] =[];
  Faction: Faction[] = [];
  constructor() { 
    this.Faction.push(new Faction("Orks"));
    this.Faction[0].units.push(new Units("Boyz", 170));
    this.Faction[0].units.push(new Units("Kopters de la mort", 115));
    this.Alliance.push(new Alliance("Xenos"));
    this.Alliance[0].faction.push(this.Faction[0]);
    this.Faction.push(new Faction("Space marines"));
    this.Faction[1].units.push(new Units("Escouade Primaris", 170));
    this.Faction[1].units.push(new Units("Dreadnought", 115));
    this.Alliance.push(new Alliance("Space marines"));
    this.Alliance[1].faction.push(this.Faction[1]);

  }
  getAlliance() {
    return this.Alliance;
   }
   getFaction() {
    return this.Faction;
   }
}

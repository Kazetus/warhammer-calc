import { Injectable } from '@angular/core';
import { Army } from 'src/app/models/army.model';
import { Faction } from 'src/app/models/faction.model';
import { Alliance } from 'src/app/models/alliance.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArmyService {
  ArmyListsArray: Army[] = [];
  Alliance: Alliance[] =[];
  Faction: Faction[] = [];
  ArmyAdress = "/public/army";

  constructor(
    private http: HttpClient) {

   }
   getArmy (): any {
    try { fetch(environment.baseUrl + this.ArmyAdress)
      .then(response => {console.log(response); return response})
      .catch(error => (console.log(error)));
      
    } catch (error) {
      
    }
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

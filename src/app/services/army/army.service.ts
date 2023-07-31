import { Injectable } from '@angular/core';
import { Army } from 'src/app/models/army.model';
import { Faction } from 'src/app/models/faction.model';
import { Alliance } from 'src/app/models/alliance.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArmyService {
  ArmyListsArray: Army[] = [];
  Alliance: Alliance[] =[];
  Faction: Faction[] = [];
  ArmyAdress = "public/army";
  optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'http://localhost:4200'
    })
  };
  constructor(
    private http: HttpClient) {

   }
  //  getArmy (): Observable<any>{
  //         return this.http.get(environment.baseUrl + this.ArmyAdress, this.optionRequete)
  //           .pipe(
  //             tap((resultat) => console.log("Résultat de la requête : ",resultat)),
  //             catchError(this.handleError('erreur lors de la requête CORS', []))
  //           );
  //   }
  getArmy() {
    fetch(environment.baseUrl + this.ArmyAdress,{mode:"cors"})
    .then(response => {response.json().then(data => {console.log(data)})});
  }
  handleError(error: string, []): any {
    console.log(error);
    return error;
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

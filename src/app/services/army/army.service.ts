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
  ArmyListsArray: Object[] = [];
  Alliance: Alliance[] =[];
  Faction: Faction[] = [];
  ArmyAdress = "public/army";
  optionRequete = {
    headers: new HttpHeaders({
      "methods" : "get",
      "mode":"cors",
      'Access-Control-Allow-Origin':'http://localhost:4200'
    })
  };
  constructor(
    private http: HttpClient) {

   }
  //  getArmy (): any{
  //         return this.http.get<Object[]>(environment.baseUrl + this.ArmyAdress, this.optionRequete)
  //         .subscribe(data => {
  //           this.ArmyListsArray = data;
  //           console.log(this.ArmyListsArray);
  //           return this.ArmyListsArray;
  //         });
  // }
  getArmy() {
    fetch(environment.baseUrl + this.ArmyAdress,{mode:"cors"})
    .then(response => {response.json().then(data => {console.log(data)})});
  }
}
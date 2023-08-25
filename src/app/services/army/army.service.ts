import { Injectable } from '@angular/core';
import { Army } from 'src/app/models/army.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArmyService {
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
  getArmy (): Observable<Army[]>{
    return this.http.get<Army[]>(environment.baseUrl + this.ArmyAdress, this.optionRequete)
  }
}
import { Injectable } from '@angular/core';
import { Alliance } from 'src/app/models/alliance.model';
import { Faction } from 'src/app/models/faction.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { Army } from 'src/app/models/army.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class BuilderService {
  allianceAdress = "public/alliance";
  factionAdress = "public/faction";
  armyAdress = "user/army";
  optionRequete = {
    headers: new HttpHeaders({
      "methods" : "get",
      "mode":"cors",
      'Access-Control-Allow-Origin':'http://localhost:4200'
    })
  };
  postHeader = {};
  constructor(
    private http: HttpClient, private cookieService: CookieService) {
      this.postHeader = {headers: new HttpHeaders({
        "methods" : "post",
        "Content-Type" : "application/json",
        "mode":"cors",
        'Access-Control-Allow-Origin':'http://localhost:4200',
        "authorization" : "Bearer " + this.cookieService.get("authorization")
      })}
  }
  getAlliance (): Observable<Alliance[]>{
    return this.http.get<Alliance[]>(environment.baseUrl + this.allianceAdress, this.optionRequete)
  }
  getFaction (): Observable<Faction[]>{
    return this.http.get<Faction[]>(environment.baseUrl + this.factionAdress, this.optionRequete)
  }
  setArmy (army: Army): Observable<Object> {
    this.postHeader = {headers: new HttpHeaders({
      "methods" : "post",
      "Content-Type" : "application/json",
      "mode":"cors",
      'Access-Control-Allow-Origin':'*',
      "Authorization" : "Bearer " + this.cookieService.get("authorization")
    })};
    console.log(this.postHeader);
    return this.http.post(environment.baseUrl+ this.armyAdress, JSON.stringify(army), this.postHeader);
  }
}

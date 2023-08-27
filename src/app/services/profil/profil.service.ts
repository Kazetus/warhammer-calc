import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  GET_URL = "user/userdata";
  optionRequete = {
    headers: new HttpHeaders({
      "methods" : "get",
      "mode":"cors",
      'Access-Control-Allow-Origin':'http://localhost:4200'
    })
  };
  constructor(private cookieService: CookieService, private http: HttpClient) { 
  }
  getUser(): Observable<User> {
    let token = this.cookieService.get("authorization");
    this.optionRequete = {
      headers: new HttpHeaders({
        "methods" : "get",
        "mode":"cors",
        'Access-Control-Allow-Origin':'http://localhost:4200',
        "Authorization" : "Bearer " + token
      })
    };
    return this.http.get<User>(environment.baseUrl + this.GET_URL, this.optionRequete)
  }
}

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
  CHECK_URL = "check";
  UPDATE_URL = "user/user/";
  DELETE_URL = "user/army/";
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
    return this.http.get<User>(environment.baseUrl + this.GET_URL, this.optionRequete);
  }
  
  checkPassword(username: String, password: String) {
    let token = this.cookieService.get("authorization");
    this.optionRequete = {
      headers: new HttpHeaders({
        "methods" : "post",
        "mode":"cors",
        'Access-Control-Allow-Origin':'http://localhost:4200',
        "Authorization" : "Bearer " + token
      })
    };
    let body = {
      "username": username,
      "password": password
    }
    return this.http.post(environment.baseUrl + this.CHECK_URL, body, this.optionRequete)
  }
  updateUser(user: Object, id: number) {
    let token = this.cookieService.get("authorization");
    this.optionRequete = {
      headers: new HttpHeaders({
        "methods" : "put",
        "mode":"cors",
        'Access-Control-Allow-Origin':'http://localhost:4200',
        "Authorization" : "Bearer " + token
      })
    };
    return this.http.put(environment.baseUrl + this.UPDATE_URL + id, user, this.optionRequete).subscribe();
  }
  remove(id: number) {
    let token = this.cookieService.get("authorization");
    this.optionRequete = {
      headers: new HttpHeaders({
        "methods" : "delete",
        "mode":"cors",
        'Access-Control-Allow-Origin':'http://localhost:4200',
        "Authorization" : "Bearer " + token
      })
    };
    return this.http.delete(environment.baseUrl + this.DELETE_URL + id, this.optionRequete).subscribe();
  }
}

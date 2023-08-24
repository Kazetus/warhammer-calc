import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  REGISTER_URL = 'register';
  USER_URL = "public/";
  optionRequete = {
    headers: new HttpHeaders({
      "methods" : "get",
      "mode":"cors",
      'Access-Control-Allow-Origin':'http://localhost:4200'
    })
  };
  constructor(private http: HttpClient, private cookieService: CookieService) { 
    
  }
  checkUsername(username: String) {
    return this.http.get<boolean>(environment.baseUrl + this.USER_URL + username, this.optionRequete);
  }
  addUser(username: String, mail: String, password: String) {
    let body = {
      "username" : username,
      "mail" : mail,
      "password" : password
    }
    console.log("ici");
    return new Observable<boolean>((observer) => 
    {
    this.http.post(environment.baseUrl + this.REGISTER_URL, body).subscribe({next: (result: any) => {
      observer.next(true);
      const token = result.token;
      this.cookieService.delete("authorization");
      this.cookieService.set("authorization", token);
      observer.complete();
    },error: error => {
      observer.error(false);
      observer.complete();
    }})
  }) 
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user.model';
 
@Injectable({
  providedIn: 'root'
})
export class SessionLoginService {
  LOGIN_URL = 'login';
  CHECK_URL = 'check';
  ROLE_URL = 'user/role';
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) { }

  login(pUsername: string, pPassword: string) {
    const loginData = {
      username: pUsername,
      password: pPassword
    }
    return new Observable<boolean>((observer) => 
    {
      this.httpClient.post(environment.baseUrl + this.LOGIN_URL, loginData).subscribe({next: (result: any) => {
        observer.next(true);
        const token = result.token;
        this.cookieService.delete("authorization");
        let expired = new Date();
        expired.setMinutes(expired.getMinutes() + 30);
        this.cookieService.set("authorization", token, expired);
        observer.complete();
      },error: error => {
        observer.error(false);
        observer.complete();
      }})
    }) 
  }
  getUserRole() {
    const token = this.cookieService.get("authorization");
    if(token) {
      let optionsRequete = {
        headers: new HttpHeaders({
          "methods" : "get",
          "mode":"cors",
          'Access-Control-Allow-Origin':'http://localhost:4200',
          "Authorization" : "Bearer " + token
        })
      };
      return new Observable<number>((observer) => {
        this.httpClient.get(environment.baseUrl + this.ROLE_URL, optionsRequete).subscribe({next: (result: any) => {
          observer.next(result);
          observer.complete;
        }, error: error => {
          observer.next(0);
          observer.complete;
        }
        });
      });
    } else {
      return new Observable<number>((observer) => {
        observer.next(0);
        observer.complete();
      })
    }
  }
  checkUser(){
    let token = this.cookieService.get("authorization");
    if(token) {
      let optionsRequete = {
        headers: new HttpHeaders({
          "methods" : "get",
          "mode":"cors",
          'Access-Control-Allow-Origin':'http://localhost:4200',
          "Authorization" : "Bearer " + token
        })
      };
      return new Observable<boolean>((observer) => {
        this.httpClient.get(environment.baseUrl + this.CHECK_URL, optionsRequete).subscribe({next: (result: any) => {
          observer.next(true);
          observer.complete();
        }, error: error => {
          observer.error(error);
          this.cookieService.delete("authorization");
          observer.complete();
        }})
      })
    } else {
      return new Observable<boolean>((observer) => {
        observer.next(false);
        observer.complete();
      })
    }
  }
}

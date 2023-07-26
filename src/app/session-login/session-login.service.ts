import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
 
@Injectable({
  providedIn: 'root'
})
export class SessionLoginService {
  LOGIN_URL = '/login';

  constructor(
    private httpClient: HttpClient
  ) { }

  login(pUsername: string, pPassword: string) {
    const loginData = {
      username: pUsername,
      password: pPassword
    }
    return new Observable<boolean>((observer) => 
    {
      this.httpClient.post(environment.baseUrl + this.LOGIN_URL, loginData).subscribe(result => {
        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(false);
        observer.complete();
      })
    }) 
  }
  // logout() {
  //   return new Observable<boolean>((observer) => {
  //     this.httpClient.get(environment.baseUrl + this.LOGOUT_URL).subscribe( result => {
  //       observer.next(true);
  //       observer.complete();
  //     }, error => {
  //       observer.error(false);
  //       observer.complete();
  //     })
  //   })
  // }
}

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { SessionLoginService } from '../services/session-login/session-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  connected: Observable<Boolean>;
  constructor (private router: Router ,private cookieService: CookieService, private sessionLogin: SessionLoginService) {
    this.connected = new Observable();
  }
  ngOnInit(): void {
    this.connected = this.sessionLogin.checkUser();
  }
  displayActivePage(name: string) {
    let test = this.router.url;
    if(test == name) {
      return true;
    } else {
      return false;
    }
  }
  userConnected(connected: Boolean | null): boolean {
    if(connected == null || connected == false) {
      return false;
    } else {
      return true;
    }
  }
  logout() {
    this.cookieService.delete("authorization");
    this.connected = new Observable((observer) => {
      observer.next(false);
      observer.complete();
    })
  }
  displayNavBar() {
    let nav = document.getElementById("navBar");
    if(nav != null) {
      nav.classList.toggle("display");
    }
  }
}

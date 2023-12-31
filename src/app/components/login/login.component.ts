import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionLoginService } from 'src/app/services/session-login/session-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username = '';
  password = '';
  wrongCredentials = false;

  constructor( private sessionLogin: SessionLoginService, private router: Router,) {

  }
  ngOnInit(): void{
    this.sessionLogin.checkUser().subscribe(result => {
      if(result) {
        this.router.navigate(['/']);
      }
    })
  }
  login() {
    this.wrongCredentials = false;
    this.sessionLogin.login(this.username, this.password).subscribe({next :result => {
      location.reload();
    },error: error => {
      this.wrongCredentials = true;
    }})
  }
}

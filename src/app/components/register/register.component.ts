import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterService } from 'src/app/services/register/register.service';
import { SessionLoginService } from 'src/app/services/session-login/session-login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  check: Observable<Boolean> | undefined;
  constructor( private registerService: RegisterService, private sessionLogin: SessionLoginService, private router: Router) {
    this.registerForm = new FormGroup ( {
      'username': new FormControl('', Validators.required),
      'mail': new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      'password': new FormControl('', Validators.required),
      'passwordConfirmation': new FormControl('', Validators.required)
    });
    this.registerForm.addValidators(this.createCompareValidator(
      this.registerForm.get('password'),
      this.registerForm.get('passwordConfirmation')
    ))
    this.check = new Observable;
  }
  ngOnInit() {
    this.sessionLogin.checkUser().subscribe(result => {
      if(result) {
        this.router.navigate(['/']);
      }
    })
  }
  registerUser() {
    this.submitted = true;
    if(this.registerForm.invalid) {
      return;
    }
    this.registerService.addUser(this.v.username, this.v.mail, this.v.password).subscribe({next :result => {
      this.router.navigate(['/'])
    },error: error => {
    }})
  }
  get v() {
    return this.registerForm.value;
  }
  get f() {
    return this.registerForm.controls;
  }
 createCompareValidator(controlOne: AbstractControl | null, controlTwo: AbstractControl | null) {
    return () => {
    if (controlOne?.value !== controlTwo?.value)
      return { match_error: 'Value does not match' };
    return null;
    };
  }
  checkUsername() {
    if(this.v.username != '') {
      this.check = this.registerService.checkUsername(this.v.username);
    }
  }
  verify(check: Boolean | null) {
    return !check;
  }
}

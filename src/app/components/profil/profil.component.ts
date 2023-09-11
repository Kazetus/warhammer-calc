import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Army } from 'src/app/models/army.model';
import { User } from 'src/app/models/user.model';
import { ProfilService } from 'src/app/services/profil/profil.service'
import { RegisterService } from 'src/app/services/register/register.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit{
  updateForm: FormGroup;
  submitted: Boolean;
  user$: Observable<User>;
  user: User;
  testPassword: Boolean;
  check: Observable<Boolean> | undefined;
  checked: Boolean;
  constructor(private profilService: ProfilService, private registerService: RegisterService, private cookieService: CookieService) {
    this.user$ = this.profilService.getUser()
    this.user = new User("", "");
    this.submitted = false;
    this.checked= false;
    this.testPassword = false;
    this.updateForm = new FormGroup ( {
      'username': new FormControl('', Validators.required),
      'mail': new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
      'oldPassword': new FormControl('', Validators.required),
      'newPassword': new FormControl(''),
      'passwordConfirmation': new FormControl('')
    });
    this.updateForm.addValidators(this.createCompareValidator(
      this.updateForm.get('newPassword'),
      this.updateForm.get('passwordConfirmation')
    ))
    this.check = new Observable;
  }
  ngOnInit() {
    if(this.cookieService.get("Authorization") != null) {
      this.user$ = this.profilService.getUser();
      this.user$.subscribe(data => {
        this.saveUser(data);
      });
    }
  }
  saveUser(user: User) {
    this.user = user;
    this.v.mail = user.mail;
    this.v.username = user.username;
  }
  ArmyPoints(army: any): number {
    let points= 0;
    army.units.forEach((units: { points: number; }) => {
        points += units.points;
    });
    return points;
  }
  displayUnits(index: number) {
    let display = document.getElementsByClassName("unitsList" + index);
    for(let i = 0; i < display.length; i++) {
      display[i].classList.toggle("disable");
    }
  }
  get v() {
    return this.updateForm.value;
  }
  get f() {
    return this.updateForm.controls;
  }
  removeUnitsFromArmy(army: Army,index: number) {
    console.log(army.units[index]);
  }
  checkUsername() {
    this.checked= true;
    if(this.v.username != '') {
      this.check = this.registerService.checkUsername(this.v.username);
    }
  }
  createCompareValidator(controlOne: AbstractControl | null, controlTwo: AbstractControl | null) {
    return () => {
    if (controlOne?.value !== controlTwo?.value)
      return { match_error: 'Value does not match' };
    return null;
    };
  }
  verify(check: Boolean | null) {
    return !check;
  }
  saveTest(data: Boolean) {
    this.testPassword = data;
    if(this.v.username == "") {
      this.updateForm.value.username = this.user.username;
    }
    if(this.v.mail == "") {
      this.updateForm.value.mail = this.user.mail;
      
    }
    if(this.updateForm.invalid) {
      return;
    }
    if(this.testPassword) {
      let body = {};
      if(this.v.username != this.user.username) {
        body = Object.assign(body, {"username" : this.v.username});
      }
      if(this.v.mail != this.user.mail) {
        this.user.username= this.v.mail;
        body = Object.assign(body, {"mail" : this.v.mail});
      }
      if(this.v.newPassword != "" && this.v.passwordConfirmation != "" && this.v.newPassword == this.v.passwordConfirmation) {
        body = Object.assign(body, {"password": this.v.newPassword});
      }
      this.profilService.updateUser(body, this.user.idUser);
    }
  }
  updateUser() {
    this.submitted = true;
    this.profilService.checkPassword(this.user.username, this.v.oldPassword).subscribe( (data: any) => {
      this.saveTest(data);
    });
  }
  removeArmy(id: number) {
    this.profilService.remove(id);
    location.reload();
  }
}

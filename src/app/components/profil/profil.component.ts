import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Army } from 'src/app/models/army.model';
import { User } from 'src/app/models/user.model';
import { ProfilService } from 'src/app/services/profil/profil.service'

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit{
  user$: Observable<User>;
  user: User;
  constructor(private profilService: ProfilService) {
    this.user$ = this.profilService.getUser();
    this.user = new User("", "");
  }
  ngOnInit() {
    this.user$.subscribe(data => {
      this.saveUser(data);
    });
  }
  saveUser(user: User) {
    this.user = user;
    console.log(this.user);
  }
  ArmyPoints(army: any): number {
    let points= 0;
    army.units.forEach((units: { points: number; }) => {
        points += units.points;
    });
    return points;
}
displayUnits(army: Army) {
  let display = document.getElementById("display");
  if(display != null) {
    display.innerHTML=`
    <thead>
      <tr>
        <th class="row">Nom de l'armée</th>
        <th class="row">Factions</th>
        <th class="row">Alliance</th>
      </tr>
      <tr> 
        <th class="rowhead">${army.armyName}</th>
        <th class="rowhead">${army.faction}</th>
        <th class="rowhead">${army.alliance}</th>
      </tr>
      <tr>
        <th class="row">Nom de l'unité</th>
        <th class="row">points</th>
        <th class="row">Nombre de figurine</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
      `;
      console.log(army);
    for(let i = 0; i< army.units.length; i++) {
      console.log(army.units[i].unitsName)
      display.children[1].innerHTML += `
      <tr>
        <td class="row">${army.units[i].unitsName}</td>
        <td class="row">${army.units[i].points}</td>
        <td class="row">${army.units[i].nombreFigurine}</td>
      </tr>
      `;
    }
  }
}
}

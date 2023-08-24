import { Component, OnInit } from '@angular/core';
import { Army } from 'src/app/models/army.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.css']
})
export class ArmyComponent implements OnInit {
  armyList$: Observable<Army[]>;
  ArmyAdress = "public/army";
  optionRequete = {
    headers: new HttpHeaders({
      "methods" : "get",
      "mode":"cors",
      'Access-Control-Allow-Origin':'http://localhost:4200'
    })
  };
  constructor(private http: HttpClient) {
    this.armyList$ = this.http.get<Army[]>(environment.baseUrl + this.ArmyAdress, this.optionRequete);
  }
  ngOnInit(): void {
    this.armyList$ = this.http.get<Army[]>(environment.baseUrl + this.ArmyAdress, this.optionRequete);
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
    let content = display?.childNodes;
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

import { Component, OnInit } from '@angular/core';
import { ArmyService } from 'src/app/services/army/army.service';
import { Army } from 'src/app/models/army.model';
import { Units } from 'src/app/models/units.model';
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
    this.armyList$.subscribe(
      data => {
        console.log(data);
      }
    )
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
          <th colspan="3">${army.armyName}</th>
          <th>${army.faction}</th>
          <th>${army.alliance}</th>
        </tr>
        <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        </tr>
      </thead>
        `;
    }
  }
}

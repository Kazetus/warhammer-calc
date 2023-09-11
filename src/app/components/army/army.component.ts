import { Component, OnInit } from '@angular/core';
import { Army } from 'src/app/models/army.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArmyService } from 'src/app/services/army/army.service';

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
  constructor(private http: HttpClient, private armyService: ArmyService) {
    this.armyList$= this.armyService.getArmy();
  }
  ngOnInit(): void {
  }
  ArmyPoints(army: any): number {
      let points= 0;
      army.units.forEach((units: { points: number; }) => {
          points += units.points;
      });
      return points;
  }
  displayUnits(id: number) {
    let display = document.getElementsByClassName("unitsList" + id);
    for(let i = 0; i < display.length; i++) {
      display[i].classList.toggle("disable");
    }
    let chevron = document.getElementsByClassName("arrow");
    chevron[id].classList.toggle("fa-chevron-right");
    chevron[id].classList.toggle("fa-chevron-down");
  }
}

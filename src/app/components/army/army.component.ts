import { Component, OnInit } from '@angular/core';
import { ArmyService } from 'src/app/services/army/army.service';
import { Army } from 'src/app/models/army.model';
import { Units } from 'src/app/models/units.model';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.css']
})
export class ArmyComponent implements OnInit {
  // armyList: Object[];

  ArmyAdress = "public/army";
  // constructor(
  //   private armyService: ArmyService) {
  //   this.armyList = this.armyService.getArmy();
  // }
  ngOnInit(): void {
    
    // fetch(environment.baseUrl + this.ArmyAdress,{mode:"cors"})
    // .then(response => {response.json().then(data => {console.log(data)})});
    fetch('https://localhost:8080/public/army', { 
      method: 'get'
  })
  .then(response => response.json().then(data => console.log(data))
  .catch(err => console.error(err)))
  .catch(err => console.error(err));
    // this.armyList = this.armyService.getArmy();
    // console.log(this.armyList);
  }
  // ArmyPoints(army: any): number {
  //     let points= 0;
  //     army.units.forEach((units: { points: number; }) => {
  //         points += units.points;
  //     });
  //     return points;
  // }
}

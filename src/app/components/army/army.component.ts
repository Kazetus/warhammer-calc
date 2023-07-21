import { Component, OnInit } from '@angular/core';
import { ArmyService } from 'src/app/services/army/army.service';
import { Army } from 'src/app/models/army.model';
import { Units } from 'src/app/models/units.model';
@Component({
  selector: 'app-army',
  templateUrl: './army.component.html',
  styleUrls: ['./army.component.css']
})
export class ArmyComponent implements OnInit {
  armyList: Army[];

  constructor(private armyService: ArmyService) {
    this.armyList = armyService.getArmy();
  }
  ngOnInit(): void {
  }
  ArmyPoints(army: Army): number {
      let points= 0;
      army.units.forEach(units => {
          points += units.points;
      });
      return points;
  }
}

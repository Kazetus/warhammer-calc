import { Component, OnInit } from '@angular/core';
import { ArmyService } from 'src/app/services/army/army.service';
import { Faction } from 'src/app/models/faction.model';
import { Alliance } from 'src/app/models/alliance.model';
import { Units } from 'src/app/models/units.model';
@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit{
    faction: Faction[];
    alliance: Alliance[];
    units: Units[];

    constructor(private armyService: ArmyService){
        this.faction = armyService.getFaction();
        this.alliance = armyService.getAlliance();
        this.units = armyService.getArmy();
    }
    ngOnInit(): void {
        
    }
}

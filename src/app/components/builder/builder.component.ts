import { Component, OnInit } from '@angular/core';
import { Alliance } from 'src/app/models/alliance.model';
import { BuilderService } from 'src/app/services/builder/builder.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Faction } from 'src/app/models/faction.model';
import { Army } from 'src/app/models/army.model';
import { Units } from 'src/app/models/units.model';
@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit{
    alliances: Alliance[];
    faction: Faction[];
    allianceForm: FormGroup;
    factionForm: FormGroup;
    armyName: FormGroup;
    myArmy: Army;
    constructor(private builderService: BuilderService){
      this.alliances = builderService.getAlliance();
      this.faction = builderService.getFaction();
      this.allianceForm = new FormGroup( {
        'alliance': new FormControl("Xenos", Validators.required)
      });
      this.factionForm = new FormGroup({
        'faction': new FormControl("choice", Validators.required)
      });
      this.armyName = new FormGroup({
        "name": new FormControl("New Army", Validators.required)
      });
      this.myArmy = new Army(this.armyName.value.name, new Faction(this.factionForm.value.faction), new Alliance(this.allianceForm.value.alliance));
    }
    ngOnInit(): void {
      let myArmyLocale = localStorage.getItem("myArmy");
      if(myArmyLocale) {
        this.myArmy = JSON.parse(myArmyLocale);
      }
    }
  getFactionOfAlliance() {
    let selectAlliance = this.alliances.filter(alliances => alliances.name === this.allianceForm.value.alliance);
    return selectAlliance[0].faction;
 }
  getUnitsOfFaction() {
      let SelectFaction = this.faction.filter(faction => faction.name === this.factionForm.value.faction);
      return SelectFaction[0] != undefined ? SelectFaction[0].units : null;
  }
  ArmyPoints(army: Army): number {
    let points= 0;
    army.units.forEach(units => {
        points += units.points;
    });
    return points;
  }
  addUnitsToArmy(units: Units) {
    this.myArmy.units.push(units);
    localStorage.setItem('myArmy', JSON.stringify(this.myArmy));
  }
  editArmy (units: Units) {
    if(this.myArmy.units.length == 0) {
      this.myArmy = new Army(this.armyName.value.name, new Faction(this.factionForm.value.faction), new Alliance(this.allianceForm.value.alliance));
      this.addUnitsToArmy(units);
    } else if (this.myArmy.faction != this.factionForm.value.faction) {
    } else {
      this.addUnitsToArmy(units);
    }
    if(this.myArmy.name != this.armyName.value.name) {
      this.myArmy.name = this.armyName.value.name;
    }
  }
  removeUnitsFromArmy(units: number) {
    this.myArmy.units.splice(units, 1);
  }
}
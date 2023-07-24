import { Component, OnInit } from '@angular/core';
import { Alliance } from 'src/app/models/alliance.model';
import { BuilderService } from 'src/app/services/builder/builder.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit{
    alliances: Alliance[];
    allianceForm: FormGroup;

    constructor(private builderService: BuilderService){
      this.alliances = builderService.getAlliance();
      this.allianceForm = new FormGroup( {
        'alliance': new FormControl("Xenos", Validators.required)
      })
    }
    ngOnInit(): void {
    }
  getFactionOfAlliance() {
    let selectAlliance = this.alliances.filter(alliances => alliances.name === this.allianceForm.value.alliance);
    return selectAlliance[0].faction;
 }
}
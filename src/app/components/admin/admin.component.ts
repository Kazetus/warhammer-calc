import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Alliance } from 'src/app/models/alliance.model';
import { Faction } from 'src/app/models/faction.model';
import { BuilderService } from 'src/app/services/builder/builder.service';
import { SessionLoginService } from 'src/app/services/session-login/session-login.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  connected: Observable<number> | undefined;
  alliances: Observable<Alliance[]>;
  factions: Observable<Faction[]>;
  activeFaction: String;
  constructor (private router: Router, private builderService: BuilderService, private sessionLogin: SessionLoginService) {
    this.connected = new Observable();
    this.alliances = this.builderService.getAlliance();
    this.factions = this.builderService.getFaction();
    this.activeFaction = "Space Marines";
  }
  ngOnInit(): void {
    this.connected = this.sessionLogin.getUserRole();
    if(this.connected != undefined) {
      this.connected.subscribe(data => {
        if(data == 0 || data == 2) {
          this.router.navigate(['/']);
        }
      });
    }
  }
  setActiveFaction(name: String) {
    this.activeFaction = name;
  }
  save(edited: Alliance | Faction) {
    if(typeof edited == typeof Alliance) {

    } else {

    }
  }
  delete(deleted: Alliance | Faction) {
    if(typeof deleted == typeof Alliance) {

    } else {

    }
  }
}

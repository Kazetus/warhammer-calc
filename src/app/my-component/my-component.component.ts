import { Component, OnInit } from '@angular/core';
import { MonPremierServiceService } from '../mes-services/mon-premier-service.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit{
  monInt = 0;
  constructor(private monService: MonPremierServiceService){

  }
  ngOnInit(): void {
    this.monInt = this.monService.sommeDeuxPlusTrois();
  }
}

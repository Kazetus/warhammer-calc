import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonPremierServiceService {

  constructor() { }
  sommeDeuxPlusTrois(): number{
    return 2 + 3;
  }
}

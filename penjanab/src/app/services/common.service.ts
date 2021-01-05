import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  //new metthod/fucntion
  add(a: number, b: number){
    const val=a+b;
    return val;
  }//end add
}

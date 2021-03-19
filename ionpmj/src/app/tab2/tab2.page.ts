import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  products:any=[{}];//define array variable
  //products

  //loop
  loopproducts(){
    this.products[0]="mouse";
    this.products[1]="keyboard";
    this.products[2]="casing";
    this.products[3]="monitor";
    let x;

    for(x=0;x<this.products.length;x++){
      console.log(this.products[x]);
    }
  }

  constructor() {
    this.loopproducts();
  }

  //

}

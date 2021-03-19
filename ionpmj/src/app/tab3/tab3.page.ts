import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  //variable declaration
  price:any;//bind to ion-input
  productcode:any;
  productname:any;
  afterdisc:number;

  calculatediscount(){
    //discount 50%
    this.afterdisc=parseFloat(this.price)-(parseFloat(this.price)*0.5);
    alert ("Price after 50% discount = "+this.afterdisc);

  }

  //function helloword
  helloworld(){
    alert("Hello World!");
    console.log("Selamat datang!!!");
  }

}

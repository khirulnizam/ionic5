import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public firestore:AngularFirestore) {}

  //variable declaration
  price:any;//bind to ion-input
  productcode:any;
  productname:any;
  afterdisc:number;

  insertproduct(){
    //simple checking
    if(this.productname!=null){
      this.firestore.collection('products').add({
        productname:this.productname,
        productcode:this.productcode,
        price:this.price,
      });
      alert("Product name "+this.productname+" has been saved");
    }else{
      alert("Enter product name!");
    }
  }//end insertproduct

  calculatediscount(){
    //discount 50%
    if(this.price==null){
      alert("Please enter product price!");
    }
    else{//not null
      this.afterdisc=parseFloat(this.price)-(parseFloat(this.price)*0.5);
      alert ("Price after 50% discount = "+this.afterdisc);
    }//end if checking price
  }

  //function helloword
  helloworld(){
    alert("Hello World!");
    console.log("Selamat datang!!!");
  }

}

import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  constructor(public firestore:AngularFirestore) {
    //this.loopproducts();
    this.getallproducts();
  }

  productlist:Array<any>=[];
  //get all products
  getallproducts(){
    //fetch record from firestore database
    const firebase=this.firestore.collection('products')
    .snapshotChanges()
    .pipe(map((action)=>action.map((snapshot)=>{
      const id=snapshot.payload.doc.id;
      const data=snapshot.payload.doc.data() as any;
      return{
        id:id,
        productname:data.productname,
        productcode:data.productcode,
        price:data.price
      }
    })));

    //transform associative 
    firebase.subscribe(data=>{
      this.productlist=data;
    });

  }
  

  //
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

}

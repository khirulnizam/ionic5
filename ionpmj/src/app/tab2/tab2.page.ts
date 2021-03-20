import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  constructor(public firestore:AngularFirestore,
    public alertController: AlertController) {
    //this.loopproducts();
    this.getallproducts();
  }

  //delete product
  async deleteproduct(id:any){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete product',
      message: 'Sure to delete product record?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          handler:() => {
            console.log(id);
            //console.log(data);//dari inputs
            //update to firestore
            this.firestore.collection('products').doc(id).delete();
            console.log('Deleted record: '+id);
          }
        }
      ]
    });

    await alert.present();

  }

  //updateproduct function
  async updateproduct(data:any){
    console.log("in updateproduct");
    //confirmation alert
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Update task',
      message: 'Type in to update',
      inputs:[
        {
          name:'editproductname',
          value: data.productname 
        },
        {
          name:'editprice',
          value: data.price,
          type:'number',
        },
    ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Update',
          handler:input => {
            console.log(data.id);
            console.log(input);//dari inputs
            //update to firestore
            this.firestore.collection('products').doc(data.id).update({
              productname:input.editproductname,
              price:input.editprice,
            });
            console.log('Update record to database');
          }
        }
      ]
    });

    await alert.present();

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

  }//getallproducts

  //paste here filterproducts
  filterproducts(event){
    let searchkey=event.detail.value;
    //fetch record from firestore database
    const firebase=this.firestore.collection('products',
      ref=>ref.where('productname','>=',searchkey))
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

  }//getallproducts
  

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

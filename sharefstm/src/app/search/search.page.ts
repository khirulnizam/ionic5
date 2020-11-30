import { Component, OnInit } from '@angular/core';
//import firebase additional library
import {FirebaseService} from '../services/firebase.service';
//navCtrl
import { NavController } from '@ionic/angular';
import {Router} from "@angular/router";
//import { AngularFireAuth } from '@angular/fire/auth';
//import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  activities = [];//hold records
	//ref = firebase.database().ref('activities/');//firebase root

  constructor(
    public navCtrl: NavController, 
    private router: Router,
    private firebase: FirebaseService,
    private firestore: AngularFirestore) { 
      
  }
  //activities:any;
  ngOnInit() {
    //read activities from firestore
    this.firebase.readActivities().subscribe(data => {

      this.activities = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          acname: e.payload.doc.data()['acname'],
          acdesc: e.payload.doc.data()['acdesc'],
          acdate: e.payload.doc.data()['acdate'],
          acpic:e.payload.doc.data()['acpic'],
        };
      })
      console.log(this.activities);
    });//end data.map 
    //this.activities[]= this.firestore.collection('activities').snapshotChanges();
  }


}//end page search
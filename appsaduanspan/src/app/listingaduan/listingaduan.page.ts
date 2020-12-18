import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
//import { Router } from '@angular/router';
import  {AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-listingaduan',
  templateUrl: './listingaduan.page.html',
  styleUrls: ['./listingaduan.page.scss'],
})
export class ListingaduanPage implements OnInit {
  aduans=[];
  constructor(private firebase: FirebaseService,
    private firestore: AngularFirestore) { 
    //read activities from firestore
    this.firebase.senaraiaduan().subscribe(data => {
      this.aduans = data.map(e => {//aduans contain rows
        return {
          id: e.payload.doc.id,
          isEdit: false,
          tajuk: e.payload.doc.data()['tajuk'],
          deskripsi: e.payload.doc.data()['deskripsi'],
          negeri: e.payload.doc.data()['negeri'],
        };
      })
      console.log(this.aduans);
    });//end data.map 
  }//constructor

  ngOnInit() {
  }
}

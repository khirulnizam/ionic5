import { Component, OnInit } from '@angular/core';
//import firebase additional library
import {FirebaseService} from '../services/firebase.service';
//navCtrl
import { NavController } from '@ionic/angular';
import {Router} from "@angular/router";

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
    private firebase: FirebaseService ) { 
      
  }

  ngOnInit() {
  }

  getSongList(): AngularFirestoreCollection<Song> {
    return this.firebase.collection('activities');
  }

}//end page search



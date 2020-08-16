import { Component, OnInit } from '@angular/core';
//import Firebase Service
import {FirebaseService} from '../services/firebase.service';
//Navigation
import { NavController } from '@ionic/angular';
import {Router} from "@angular/router";

@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {
  data:any={};//object variable for record entry
  constructor(
    //declare FirebaseService as fb
  	public fb:FirebaseService,
    public navCtrl: NavController, private router: Router
  ) { }

  ngOnInit() {
  }
  trycreaterecord(){
    //check login
    //timestamp
  	let t=new Date();
  	this.data.zztimestamp=t.getTime();//time zone UTC time

  	this.fb.createEntry(this.data)//call function createEntry
  		.then(_=>{
  			alert("New Activity stored");
  			//this.data.acname="";
  			//this.data.acpic="";
  		}, err=>{
  			console.log("ERROR", err);
  		})
  }//trycreaterecord

}

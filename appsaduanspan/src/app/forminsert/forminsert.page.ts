import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forminsert',
  templateUrl: './forminsert.page.html',
  styleUrls: ['./forminsert.page.scss'],
})
export class ForminsertPage implements OnInit {

  constructor(private fservice:FirebaseService,
    private router:Router) { 

  }

  ngOnInit() {
  }
  
  data:any={};
  cubahantaraduan(){
    this.fservice.simpanaduan(this.data)//call function createEntry
  		.then(_=>{
  			alert("Aduan telah direkod");
  			//this.data.acname="";
        //this.data.acpic="";
        this.router.navigate(['/listingaduan']);
  		}, err=>{
  			console.log("ERROR", err);
  		})
  }//end cubahantaraduan
}

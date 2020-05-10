import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-displayparams',
  templateUrl: './displayparams.page.html',
  styleUrls: ['./displayparams.page.scss'],
})
export class DisplayparamsPage implements OnInit {
  newname:any;//to retrieve 1st parameter
  newpostcode:any;//to retrieve 2nd parameter
  newstate:any;//to retrieve state parameter
  constructor(public route:ActivatedRoute) { 
    //capture from router
    this.newname=this.route.snapshot.params.newname;
    this.newpostcode=this.route.snapshot.params.newpostcode;
    this.newstate=this.route.snapshot.params.newstate;
    console.log("Newname parameter: "+this.newname);
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-irepeat',
  templateUrl: './irepeat.page.html',
  styleUrls: ['./irepeat.page.scss'],
})
export class IrepeatPage implements OnInit {
  nama:any;
  poskod:any;
  pilihnegeri:any;
  
  constructor( public route:Router,
    public nav:NavController) { 
  }

  ngOnInit() {//activated when screen load
    this.testLoop();
  }

  // navigate to about page
  gotonext() {
    // parameters as send inside curly brackets as key:value; note that you can send multiple parameters at the same time
    this.route.navigate(['/displayparams/',
      this.nama, this.poskod, this.pilihnegeri]);
    //this.nav.push(); //deprecated
  }

  negeri:any = Array(4);
  testLoop(){
    this.negeri[0]= "Johor";
    this.negeri[1]= "Melaka";
    this.negeri[2]= "N. Sembilan";
    this.negeri[3]= "Selangor";
    for(var x=0;x<this.negeri.length;x++)
    {
      console.log(this.negeri[x]);
    }
  }


}

import { Component, OnInit } from '@angular/core';
//import { NavController } from "@ionic/angular";
import { Router } from '@angular/router';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:any;
  katalaluan:any;
  errormessage:any;
  success:any;
  constructor(private rtr: Router, private data:DataService) { 
    //this.username='ali';
    console.log('ali');
  }

  ngOnInit() {
    console.log('ahmad');
  }

  semakdata(){
    if(this.username==null){
      alert ("Masukkan nama pengguna");
      this.errormessage="Sila masukkan password";
    }else if(this.katalaluan==null){
      alert ("Masukkan password");
      this.errormessage="Sila masukkan password";
    }else{
      this.success="Boleh cuba login";
      //load tabs
      //this.rtr.navigate(['']);//
      //load admin bawa parameter
      this.data.setusername(this.username);
      this.rtr.navigate(['admin/',this.username,this.katalaluan]);
    }
  }//end semakdata

}

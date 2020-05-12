import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.page.html',
  styleUrls: ['./daftar.page.scss'],
})
export class DaftarPage implements OnInit {

  constructor(private fService: FirebaseService ) { }

  ngOnInit() {
  }
  //define variables
  email:any;
  password:any;
  errorMessage:any='';
  successMessage:any='';

  cubadaftar() {
    this.fService.registerUser(this.email,this.password)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.successMessage = "Account created, pls login";
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      })
  }//end cubadaftar

}

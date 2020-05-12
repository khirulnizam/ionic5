import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
//Filename src/app/daftar/daftar.page.ts
@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.page.html',
  styleUrls: ['./daftar.page.scss'],
})
export class DaftarPage implements OnInit {

  constructor( 
    private authService: AuthenticateService //add Firebase Service 
    ) { }

  ngOnInit() {
  }

  email:string;
  password:string;
  errorMessage: string = '';
  successMessage: string = '';

  //Filename src/app/daftar/daftar.page.ts
  //function cubadaftar()
  cubadaftar() {
    this.authService.registerUser(this.email,this.password)
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

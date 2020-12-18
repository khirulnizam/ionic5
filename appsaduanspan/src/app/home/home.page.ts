import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email:any;//ngmodel
  password:any;//ngodel
  errorMessage:any;

  constructor(private fService:FirebaseService,
    private router:Router) {}
  cubalogin(){
    this.fService.loginUser(this.email, this.password)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        console.log("Berjaya login");
        this.router.navigate(['/forminsert']);
        //user flaged loggedin
        this.fService.userloggedin=this.email;
      }, err => {
        this.errorMessage = err.message;
        console.log(this.errorMessage);
        alert("Login tidak berjaya");
      })
  }
}

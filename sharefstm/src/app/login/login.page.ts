import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private fService:FirebaseService) { }

  ngOnInit() {
  }
  errorMessage:any='';
  successMessage:any='';
  email:any;
  password:any;
  cubalogin() {
        this.fService.loginUser(this.email, this.password)
          .then(res => {
            console.log(res);
            this.successMessage = "Welcome user: "+this.email;
            this.errorMessage='';
            //this.navCtrl.navigateForward('/dashboard');
          }, err => {
            this.errorMessage = err.message;
            this.successMessage='';
          })
        }//end cubalogin
    

}

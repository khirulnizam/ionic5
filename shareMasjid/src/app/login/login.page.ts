import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email:any;
  password:any;

  errorMessage="";
  constructor(private navCtrl: NavController,
    private authService: AuthenticateService,) { }

  ngOnInit() {
  }

  cubalogin(value) {
    this.authService.loginUser(this.email,this.password)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        //this.navCtrl.navigateForward('/dashboard');
      }, err => {
        this.errorMessage = err.message;
      })
    }//end cubalogin
}//end LoginPage

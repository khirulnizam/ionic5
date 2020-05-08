import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  	username:any;
	password:any;
	checkUser(){
		if(this.username=='' || this.username==null)
		{
			alert("Pls insert username");
		}
		else if(this.password=='' || this.password==null)
		{
			 alert("Pls insert password");
		}
		 
		else{
			alert("Welcome "+this.username);
		}

	}//end checkUser


}

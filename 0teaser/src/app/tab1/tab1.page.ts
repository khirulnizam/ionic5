import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  jisim:any; rjisim:any;
  tinggi:any; rtinggi:any;
  tinggim:number;bmi:number;
  constructor() {}
  paparberat(){
    //alert("in");
    this.jisim=this.rjisim
  }

  papartinggi(){
    //alert("in");
    this.tinggi=this.rtinggi
  }

  paparkategoribmi(){
    this.tinggim=parseFloat(this.tinggi)/100;
    this.bmi=parseFloat(this.jisim)/(this.tinggim*this.tinggim);
    if (this.bmi>=25.0){
      alert ("BMI("+this.bmi+") Category: Obes");
    }
    else if (this.bmi>=18.5 && this.bmi<25.0){
      alert ("BMI("+this.bmi+") Category: Normal");
    }
    else if (this.bmi<18.5){
      alert ("BMI("+this.bmi+") Category: Underweight");
    }
  }
  /*
  The formula is BMI = kg/m2 where kg is a person’s weight in kilograms and m2 is their height in metres squared.

  A BMI of 25.0 or more is overweight, 
  while the healthy range is 18.5 to 24.9. 
  BMI applies to most adults 18-65 years. */

}

/*
npm install jetifier
npx jetifier
ionic build
ionic capacitor add android 
npx cap sync android
npx cap open android
*/


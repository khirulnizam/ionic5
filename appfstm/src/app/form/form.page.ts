import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public num1:any;
  public num2:any;
  public output:any=0;
  public n:any[] = new Array(3);
  //function to perform add two numbers
  performAdd(){
    this.output=parseInt(this.num1)+parseInt(this.num2);
	  this.displayresult();

  }
  performAddArray(){
    for(var i = 0;i<this.n.length;i++) { 
      this.output=this.output+parseInt(this.n[i]);
      //console.log(this.n[i]); 
    }
	  this.displayresult();

  }

  displayresult(){
    console.log("Output: "+this.output);
    alert("Output: "+this.output);
  }
  
}

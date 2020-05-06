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
  public sum:any=0;
  public n:any[] = new Array(4);
  //function to perform add two numbers
  performAdd(){
    this.sum=0;
    //tambah 2 nombor
    this.sum=parseInt(this.num1)+parseInt(this.num2);
	  this.displayresult();
  }

  //function to add numbers in array
  performAddArray(){
    this.sum=0;
    for(var i = 0;i<this.n.length;i++) { 
      this.sum=this.sum+parseInt(this.n[i]);
      //console.log(this.n[i]); 
    }
	  this.displayresult();

  }
  
  displayresult(){
    //paparkan hasil
    console.log("Output: "+this.sum);
    alert("Output: "+this.sum);
  }
}

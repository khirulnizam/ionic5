import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './listpage.page.html',
  styleUrls: ['./listpage.page.scss'],
})
export class ListpagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onRadioChanged(event){
    console.log(event.detail.value);
    
  }

  unread(item){

  }

}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  card:Array<string>=[
    'card1',
    'card2',
    'card3',
    'card4',
    'card5',
  ];
  //card object
  cardobject=[
    {
      title:'title1',
      subtitle:'subtitle1',
      content:'content1'
    },
    {
      title:'title2',
      subtitle:'subtitle2',
      content:'content2'
    },
    {
      title:'title3',
      subtitle:'subtitle3',
      content:'content3'
    },
    {
      title:'title4',
      subtitle:'subtitle4',
      content:'content4'
    }

  ];

  constructor(
    private router:Router,
    private modalcontroller: ModalController
  ) {
    
  }

  //call 2nd page
  tosecondpage(){
    console.log('enter page 2nd');
    this.router.navigateByUrl('second');
    
  }

  async presentModal() {
    const modal = await this.modalcontroller.create({
    component: ModalPage,
    componentProps: { value: 123 }
    });
  
    await modal.present();
  
  }

}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { CommonService } from '../services/common.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title: string='ToDo Apps';
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
    private modalcontroller: ModalController,
    private commService: CommonService,
    private storage: Storage
  ) {
    console.log('ADD: '+commService.add(1,4));
    
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
  addDB() {
    this.storage.set('name', 'Max');
  }

  async readDb() {
    // this.storage.get('name').then((val) => {
    //   console.log(val);
    // });
    const val = await this.storage.get('name');
    console.log(val);

  }

}
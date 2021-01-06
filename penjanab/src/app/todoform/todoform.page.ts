import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.page.html',
  styleUrls: ['./todoform.page.scss'],
})
export class TodoformPage implements OnInit {

  constructor(
    private modalcontroller: ModalController
  ) { }

  ngOnInit() {
  }

  //tutup modal
  close(){
    return this.modalcontroller.dismiss();
  }

}

import { Component, OnInit } from '@angular/core';
import { checkAvailability } from '@ionic-native/core';
import { ModalController } from '@ionic/angular';
import { TodoformPage } from '../todoform/todoform.page';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  todos=[
    {
      label: 'Task1',
      check: false,
    },
    {
      label: 'Task2',
      check: false,
    },
    {
      label: 'Task3',
      check: false,
    },

  ];

  

  constructor(
    private modalcontroller:ModalController
    ) {
    this.refreshtodo();
   }

   //addtodo
  async addtodo(){
     const modal=await this.modalcontroller.create({
       component: TodoformPage,
     });

     await modal.present();
     //tunggu proses selesai
  }
   

  filtertodo=[];
  segment="unchecked";
  refreshtodo(){
    this.filtertodo=this.todos.filter((t)=>{
      if (this.segment=="uncheck"){
        return t.check==false;
      }
      return t.check==true;
    });
  }

  segmentChanged(event){
    this.segment=event.detail.value;
    console.log(event.detail.value);
    this.refreshtodo();
  }

  checked(todo){
    //
    console.log(todo);
    this.todos=this.todos.map((t)=>{
      if(t.label==todo.label){
        todo.check=!t.check;
        return t;
      }
      return t;
    });
    
  }//end checked todo

  ngOnInit() {
  }

}

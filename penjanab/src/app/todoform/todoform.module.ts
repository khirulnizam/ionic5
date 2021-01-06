import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoformPageRoutingModule } from './todoform-routing.module';

import { TodoformPage } from './todoform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodoformPageRoutingModule
  ],
  declarations: [TodoformPage]
})
export class TodoformPageModule {}

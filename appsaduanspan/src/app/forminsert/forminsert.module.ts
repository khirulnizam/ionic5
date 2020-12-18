import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForminsertPageRoutingModule } from './forminsert-routing.module';

import { ForminsertPage } from './forminsert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForminsertPageRoutingModule
  ],
  declarations: [ForminsertPage]
})
export class ForminsertPageModule {}

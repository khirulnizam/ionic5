import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForminsertjsonPageRoutingModule } from './forminsertjson-routing.module';

import { ForminsertjsonPage } from './forminsertjson.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForminsertjsonPageRoutingModule
  ],
  declarations: [ForminsertjsonPage]
})
export class ForminsertjsonPageModule {}

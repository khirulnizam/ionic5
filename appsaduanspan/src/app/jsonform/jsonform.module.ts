import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JsonformPageRoutingModule } from './jsonform-routing.module';

import { JsonformPage } from './jsonform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JsonformPageRoutingModule
  ],
  declarations: [JsonformPage]
})
export class JsonformPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayparamsPageRoutingModule } from './displayparams-routing.module';

import { DisplayparamsPage } from './displayparams.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayparamsPageRoutingModule
  ],
  declarations: [DisplayparamsPage]
})
export class DisplayparamsPageModule {}

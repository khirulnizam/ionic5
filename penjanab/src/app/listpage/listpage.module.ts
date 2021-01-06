import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListpagePageRoutingModule } from './listpage-routing.module';

import { ListpagePage } from './listpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListpagePageRoutingModule
  ],
  declarations: [ListpagePage]
})
export class ListpagePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IteratePageRoutingModule } from './iterate-routing.module';

import { IteratePage } from './iterate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IteratePageRoutingModule
  ],
  declarations: [IteratePage]
})
export class IteratePageModule {}

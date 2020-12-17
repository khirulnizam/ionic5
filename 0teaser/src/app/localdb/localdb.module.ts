import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocaldbPageRoutingModule } from './localdb-routing.module';

import { LocaldbPage } from './localdb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocaldbPageRoutingModule
  ],
  declarations: [LocaldbPage]
})
export class LocaldbPageModule {}

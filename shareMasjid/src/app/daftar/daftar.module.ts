import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaftarPageRoutingModule } from './daftar-routing.module';

import { DaftarPage } from './daftar.page';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaftarPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [DaftarPage]
})
export class DaftarPageModule {}

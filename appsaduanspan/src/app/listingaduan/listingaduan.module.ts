import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingaduanPageRoutingModule } from './listingaduan-routing.module';

import { ListingaduanPage } from './listingaduan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingaduanPageRoutingModule
  ],
  declarations: [ListingaduanPage]
})
export class ListingaduanPageModule {}

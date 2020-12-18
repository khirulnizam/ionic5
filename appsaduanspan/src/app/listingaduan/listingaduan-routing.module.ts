import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingaduanPage } from './listingaduan.page';

const routes: Routes = [
  {
    path: '',
    component: ListingaduanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListingaduanPageRoutingModule {}

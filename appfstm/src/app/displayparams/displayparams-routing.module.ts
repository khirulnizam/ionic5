import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayparamsPage } from './displayparams.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayparamsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayparamsPageRoutingModule {}

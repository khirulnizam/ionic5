import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocaldbPage } from './localdb.page';

const routes: Routes = [
  {
    path: '',
    component: LocaldbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocaldbPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IrepeatPage } from './irepeat.page';

const routes: Routes = [
  {
    path: '',
    component: IrepeatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IrepeatPageRoutingModule {}

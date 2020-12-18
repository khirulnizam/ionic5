import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForminsertPage } from './forminsert.page';

const routes: Routes = [
  {
    path: '',
    component: ForminsertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForminsertPageRoutingModule {}

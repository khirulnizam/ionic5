import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForminsertjsonPage } from './forminsertjson.page';

const routes: Routes = [
  {
    path: '',
    component: ForminsertjsonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForminsertjsonPageRoutingModule {}

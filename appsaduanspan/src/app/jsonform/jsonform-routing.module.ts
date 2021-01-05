import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsonformPage } from './jsonform.page';

const routes: Routes = [
  {
    path: '',
    component: JsonformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsonformPageRoutingModule {}

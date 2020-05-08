import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IteratePage } from './iterate.page';

const routes: Routes = [
  {
    path: '',
    component: IteratePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IteratePageRoutingModule {}

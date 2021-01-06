import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoformPage } from './todoform.page';

const routes: Routes = [
  {
    path: '',
    component: TodoformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoformPageRoutingModule {}

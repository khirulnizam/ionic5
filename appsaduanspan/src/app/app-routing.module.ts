import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'forminsert',
    loadChildren: () => import('./forminsert/forminsert.module').then( m => m.ForminsertPageModule)
  },
  {
    path: 'listingaduan',
    loadChildren: () => import('./listingaduan/listingaduan.module').then( m => m.ListingaduanPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

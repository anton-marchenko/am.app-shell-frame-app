import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./main-route/main-route.component').then(c => c.MainRouteComponent)
  },
  {
    path: 'other',
    loadComponent: () => import('./other-route/other-route.component').then(c => c.OtherRouteComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

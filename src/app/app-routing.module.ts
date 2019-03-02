import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    loadChildren: './layout/admin/admin-layout.module#AdminLayoutModule',
    data: {
      breadcrumb: 'Home',
      breadcrumbs: 'Home',
      isHome: true,
      icon: 'fa fa-home',
      show: false
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'ignore' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
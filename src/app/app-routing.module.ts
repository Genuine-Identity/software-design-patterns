import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './layout/admin/admin-layout.module#AdminLayoutModule', },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'ignore' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
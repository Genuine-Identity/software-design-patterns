import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StructuralPatternsComponent } from './structural-patterns.component';
import { StructuralPatternsHomeComponent } from './structural-patterns-home.component'
// import { FacadeComponent } from './facade/facade.component'; 


const routes: Routes = [
  {
    path: '',
    component: StructuralPatternsComponent, data: {
      breadcrumbs: 'Structural Patterns',
      title: 'Structural Patterns Title',
      smallText: 'Structural Patterns Small Text',
      isHome: true,
      icon: 'fa fa-home',
      show: false
    },
    children: [
      {
        path: '', component: StructuralPatternsHomeComponent,
      },
      // {
      //   path: 'facade', component: FacadeComponent,
      //   data: {
      //     breadcrumbs: 'Facade',
      //     title: 'Facade Title',
      //     smallText: 'Facade Small Text',
      //     isHome: true,
      //     icon: 'fa fa-home',
      //     show: false
      //   },
      // },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class StructuralPatternsRoutingModule { }

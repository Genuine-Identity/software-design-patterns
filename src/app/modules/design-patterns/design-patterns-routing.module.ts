import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DesignPatternsComponent } from './design-patterns.component';

const routes: Routes = [
  {
    path: '',
    component: DesignPatternsComponent,
    children: [
      {
        path: 'creational-patterns',
        loadChildren: '../../modules/design-patterns/creational-patterns/creational-patterns.module#CreationalPatternsModule',
        data: {
          breadcrumbs: 'Creational Patterns',
          title: 'Design Patterns Title',
          smallText: 'Design Patterns Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
      {
        path: 'structural-patterns',
        loadChildren: '../../modules/design-patterns/structural-patterns/structural-patterns.module#StructuralPatternsModule',
        data: {
          breadcrumbs: 'Structural Patterns',
          title: 'Structural Patterns Title',
          smallText: 'Structural Patterns Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
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
export class DesignPatternsRoutingModule { }

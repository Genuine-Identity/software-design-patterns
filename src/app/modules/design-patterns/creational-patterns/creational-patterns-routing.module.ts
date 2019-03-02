import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreationalPatternsComponent } from './creational-patterns.component'
import { CreationalPatternsHomeComponent } from './creational-patterns-home.component'
import { SingletonComponent } from './singleton/singleton.component';
import { AbstractFactoryComponent } from './abstract-factory/abstract-factory.component';
import { FactoryComponent } from './factory/factory.component';
import { BuilderComponent } from './builder/builder.component';
import { PrototypeComponent } from './prototype/prototype.component';

const routes: Routes = [
  {
    path: '',
    component: CreationalPatternsComponent,
    data: {
      breadcrumbs: 'Creational Patterns',
      title: 'Creational Patterns Title',
      smallText: 'Creational Patterns Small Text',
      isHome: true,
      icon: 'fa fa-home',
      show: false
    },
    children: [
      {
        path: '', component: CreationalPatternsHomeComponent,
      },
      {
        path: 'singleton', component: SingletonComponent,
        data: {
          breadcrumbs: 'Singleton',
          title: 'Singleton Title',
          smallText: 'Singleton Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
      {
        path: 'abstract-factory', component: AbstractFactoryComponent,
        data: {
          breadcrumbs: 'Abstract Factory',
          title: 'Abstract Factory Title',
          smallText: 'Abstract Factory Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
      {
        path: 'factory', component: FactoryComponent,
        data: {
          breadcrumbs: 'Factory',
          title: 'Factory Title',
          smallText: 'Factory Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
      {
        path: 'builder', component: BuilderComponent,
        data: {
          breadcrumbs: 'Builder',
          title: 'Builder Title',
          smallText: 'Builder Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
      {
        path: 'prototype', component: PrototypeComponent,
        data: {
          breadcrumbs: 'Prototype',
          title: 'Prototype Title',
          smallText: 'Prototype Small Text',
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
export class CreationalPatternsRoutingModule { }

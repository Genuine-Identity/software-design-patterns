import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StructuralPatternsComponent } from './structural-patterns.component';
import { StructuralPatternsHomeComponent } from './structural-patterns-home.component'
import { AdapterComponent } from './adapter/adapter.component';
import { BridgeComponent } from './bridge/bridge.component';
import { CompositeComponent } from './composite/composite.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { FacadeComponent } from './facade/facade.component';
import { FlyweightComponent } from './flyweight/flyweight.component';
import { ProxyComponent } from './proxy/proxy.component';

const routes: Routes = [
  {
    path: '',
    component: StructuralPatternsComponent,
    data: {
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
      {
        path: 'adapter', component: AdapterComponent,
        data: {
          breadcrumbs: 'Adapter',
          title: 'Adapter Title',
          smallText: 'Adapter Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
      {
        path: 'bridge', component: BridgeComponent,
        data: {
          breadcrumbs: 'Bridge Factory',
          title: 'Bridge Factory Title',
          smallText: 'Bridge Factory Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
      {
        path: 'composite', component: CompositeComponent,
        data: {
          breadcrumbs: 'Composite',
          title: 'Composite Title',
          smallText: 'Composite Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
      {
        path: 'decorator', component: DecoratorComponent,
        data: {
          breadcrumbs: 'Decorator',
          title: 'Decorator Title',
          smallText: 'Decorator Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
      {
        path: 'facade', component: FacadeComponent,
        data: {
          breadcrumbs: 'Facade',
          title: 'Facade Title',
          smallText: 'Facade Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
      {
        path: 'flyweight', component: FlyweightComponent,
        data: {
          breadcrumbs: 'Flyweight',
          title: 'Flyweight Title',
          smallText: 'Flyweight Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
      {
        path: 'proxy', component: ProxyComponent,
        data: {
          breadcrumbs: 'Proxy',
          title: 'Proxy Title',
          smallText: 'Proxy Small Text',
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
export class StructuralPatternsRoutingModule { }

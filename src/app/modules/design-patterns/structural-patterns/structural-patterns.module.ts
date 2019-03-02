import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralPatternsHomeComponent } from './structural-patterns-home.component';
import { StructuralPatternsComponent } from './structural-patterns.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructuralPatternsRoutingModule } from './structural-patterns-routing.module';
import { AdapterComponent } from './adapter/adapter.component';
import { BridgeComponent } from './bridge/bridge.component';
import { CompositeComponent } from './composite/composite.component';
import { DecoratorComponent } from './decorator/decorator.component';
import { FacadeComponent } from './facade/facade.component';
import { FlyweightComponent } from './flyweight/flyweight.component';
import { ProxyComponent } from './proxy/proxy.component';


@NgModule({
  declarations: [
    StructuralPatternsComponent,
    StructuralPatternsHomeComponent,
    AdapterComponent,
    BridgeComponent,
    CompositeComponent,
    DecoratorComponent,
    FacadeComponent,
    FlyweightComponent,
    ProxyComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StructuralPatternsRoutingModule,
  ]
})
export class StructuralPatternsModule { }

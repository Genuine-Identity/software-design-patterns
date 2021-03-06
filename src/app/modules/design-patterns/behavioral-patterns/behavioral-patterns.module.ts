import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehavioralPatternsComponent } from './behavioral-patterns.component';
import { BehavioralPatternsHomeComponent } from './behavioral-patterns-home.component';
import { ChainOfResponsibilityComponent } from './chain-of-responsibility/chain-of-responsibility.component';
import { CommandComponent } from './command/command.component';
import { InterpreterComponent } from './interpreter/interpreter.component';
import { IteratorComponent } from './iterator/iterator.component';
import { MediatorComponent } from './mediator/mediator.component';
import { ObserverComponent } from './observer/observer.component';
import { StateComponent } from './state/state.component';
import { StrategyComponent } from './strategy/strategy.component';
import { TemplateComponent } from './template/template.component';
import { VisitorComponent } from './visitor/visitor.component';
import { BehavioralPatternsRoutingModule } from './behavioral-patterns-routing.module';
import { MomentoComponent } from './momento/momento.component';

@NgModule({
  declarations: [
    BehavioralPatternsComponent,
    BehavioralPatternsHomeComponent,
    ChainOfResponsibilityComponent,
    CommandComponent,
    InterpreterComponent,
    IteratorComponent,
    MediatorComponent,
    ObserverComponent,
    StateComponent,
    StrategyComponent,
    TemplateComponent,
    VisitorComponent,
    MomentoComponent
  ],
  imports: [
    CommonModule,
    BehavioralPatternsRoutingModule
  ]
})
export class BehavioralPatternsModule { }

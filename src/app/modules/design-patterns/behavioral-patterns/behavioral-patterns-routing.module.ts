import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
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
import { MomentoComponent } from './momento/momento.component';

const routes: Routes = [
  {
    path: '',
    component: BehavioralPatternsComponent,
    data: {
      breadcrumbs: 'Behavioral Patterns',
      title: 'Behavioral Patterns Title',
      smallText: 'Behavioral Patterns Small Text',
      isHome: true,
      icon: 'fa fa-home',
      show: false
    },
    children: [
      {
        path: '', component: BehavioralPatternsHomeComponent,
      },   
      {
        path: 'chain-of-responsibility', component: ChainOfResponsibilityComponent,
        data: {
          breadcrumbs: 'Chain of Responsibility',
          title: 'Chain of Responsibility Title',
          smallText: 'Chain of Responsibility Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
      {
        path: 'command', component: CommandComponent,
        data: {
          breadcrumbs: 'Command',
          title: 'Command Title',
          smallText: 'Command Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
      {
        path: 'interpreter', component: InterpreterComponent,
        data: {
          breadcrumbs: 'Interpreter',
          title: 'Interpreter Title',
          smallText: 'Interpreter Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
      {
        path: 'iterator', component: IteratorComponent,
        data: {
          breadcrumbs: 'Iterator',
          title: 'Iterator Title',
          smallText: 'Iterator Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
      {
        path: 'mediator', component: MediatorComponent,
        data: {
          breadcrumbs: 'Mediator',
          title: 'Mediator Title',
          smallText: 'Mediator Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
      {
        path: 'momento', component: MomentoComponent,
        data: {
          breadcrumbs: 'Memento',
          title: 'Memento Title',
          smallText: 'Memento Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },

      {
        path: 'observer', component: ObserverComponent,
        data: {
          breadcrumbs: 'Observer',
          title: 'Observer Title',
          smallText: 'Observer Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
      {
        path: 'state', component: StateComponent,
        data: {
          breadcrumbs: 'State',
          title: 'State Title',
          smallText: 'State Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
      {
        path: 'strategy', component: StrategyComponent,
        data: {
          breadcrumbs: 'Strategy',
          title: 'Strategy Title',
          smallText: 'Strategy Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
      {
        path: 'template', component: TemplateComponent,
        data: {
          breadcrumbs: 'Template',
          title: 'Template Title',
          smallText: 'Template Small Text',
          isHome: true,
          icon: 'fa fa-home',
          show: false
        },
      },
      {
        path: 'visitor', component: VisitorComponent,
        data: {
          breadcrumbs: 'Visitor',
          title: 'Visitor Title',
          smallText: 'Visitor Small Text',
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
export class BehavioralPatternsRoutingModule { }

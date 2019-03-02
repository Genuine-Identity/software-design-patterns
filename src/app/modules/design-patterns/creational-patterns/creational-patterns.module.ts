import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreationalPatternsHomeComponent } from './creational-patterns-home.component';
import { CreationalPatternsComponent } from './creational-patterns.component';

 
import { CreationalPatternsRoutingModule } from './creational-patterns-routing.module';
import { AbstractFactoryComponent } from './abstract-factory/abstract-factory.component';
import { SingletonComponent } from './singleton/singleton.component';
import { FactoryComponent } from './factory/factory.component';
import { BuilderComponent } from './builder/builder.component';
import { PrototypeComponent } from './prototype/prototype.component';


@NgModule({
  declarations: [
    CreationalPatternsComponent,
    CreationalPatternsHomeComponent,
    AbstractFactoryComponent,
    SingletonComponent,
    FactoryComponent,
    BuilderComponent,
    PrototypeComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreationalPatternsRoutingModule,
  ]
})

export class CreationalPatternsModule { }

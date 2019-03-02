import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DesignPatternsComponent } from './design-patterns.component';
import { DesignPatternsRoutingModule } from './design-patterns-routing.module';

@NgModule({
  declarations: [
    DesignPatternsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DesignPatternsRoutingModule,
  ]
})
export class DesignPatternsModule { }

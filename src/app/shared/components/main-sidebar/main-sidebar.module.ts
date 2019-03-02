import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSidebarComponent } from './main-sidebar.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [MainSidebarComponent, RouterModule],
  declarations: [MainSidebarComponent]
})
export class MainSidebarModule { }

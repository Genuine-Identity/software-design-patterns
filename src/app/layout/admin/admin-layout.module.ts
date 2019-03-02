import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminLayoutRoutingModule } from './admin-layout.routing.module';
import { HeaderModule } from '../../shared/components/header/header.module';
import { FooterModule } from '../../shared/components/footer/footer.module';
import { MainSidebarModule } from '../../shared/components/main-sidebar/main-sidebar.module';
import { ContentHeaderModule } from '../../shared/components/content-header/content-header.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    AdminLayoutRoutingModule,
    HeaderModule,
    FooterModule,
    MainSidebarModule,
    ContentHeaderModule
  ],
  declarations: [
    AdminLayoutComponent
  ]
})
export class AdminLayoutModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';

const routes: Routes = [
  {
    path: '', component: AdminLayoutComponent,
    children: [
      // { path: '', loadChildren: '../../modules/widgets/widgets.module#WidgetsModule', },
      // { path: 'widgets', loadChildren: '../../modules/widgets/widgets.module#WidgetsModule', },
      // { path: 'charts', loadChildren: '../../modules/charts/charts.module#ChartsModule', },
      // { path: 'dashboard', loadChildren: '../../modules/dashboard/dashboard.module#DashboardModule', },
      // { path: 'agent', loadChildren: '../../modules/agent/agent.module#AgentModule', },
      // { path: 'chat-window', loadChildren: '../../modules/chat-window/chat-window.module#ChatWindowModule', },
      // { path: 'integrations', loadChildren: '../../modules/integrations/integrations.module#IntegrationsModule', },
      // { path: 'customization', loadChildren: '../../modules/customization/customization.module#CustomizationModule', },
      // { path: 'reporting-and-analytics', loadChildren: '../../modules/reporting-and-analytics/reporting-and-analytics.module#ReportingAndAnalyticsModule', },
      {
        path: 'settings',
        data: {
          breadcrumb: 'Settings',
          breadcrumbs: 'Settings',
          isRoot: false,
          icon: 'fa fa-root',
          show: false
        },
        // loadChildren: () => SettingsModule,
        // runGuardsAndResolvers: 'always',
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { dashboardRouters } from './dashboard-routering';
import { SidebarModule } from './dashboard-library/sidebar/sidebar.module';
import { HeaderDashboardModule } from './dashboard-library/header-dashboard/header-dashboard.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SidebarModule,
    HeaderDashboardModule,
    RouterModule.forChild(dashboardRouters),
    CommonModule
  ]
})
export class DashboardModule { }

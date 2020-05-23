import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { dashboardRouters } from './dashboard-routering';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild(dashboardRouters),
    CommonModule
  ]
})
export class DashboardModule { }

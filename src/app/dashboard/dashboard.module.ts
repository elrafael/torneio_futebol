import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ListCompetitionsComponent } from '../competitions/list-competitions/list-competitions.component';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ListCompetitionsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule {}

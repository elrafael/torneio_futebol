import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionsRoutingModule } from './competitions-routing.module';
import { CompetitionsComponent } from './competitions.component';
import { StandingsComponent } from './standings/standings.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CompetitionsComponent, StandingsComponent],
  imports: [
    CommonModule,
    CompetitionsRoutingModule,
    SharedModule
  ]
})
export class CompetitionsModule { }

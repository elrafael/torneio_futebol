import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionsRoutingModule } from './competitions-routing.module';
import { CompetitionsComponent } from './competitions.component';
import { DetailCompetitionComponent } from './detail-competition/detail-competition.component';
import { MatListModule } from '@angular/material/list';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    CompetitionsComponent,
    DetailCompetitionComponent,
  ],
  imports: [
    CommonModule,
    CompetitionsRoutingModule,
    MaterialModule
  ]
})
export class CompetitionsModule {}

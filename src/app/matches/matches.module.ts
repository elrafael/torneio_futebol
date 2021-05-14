import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { MatchesComponent } from './matches.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [MatchesComponent, DetailsComponent],
  imports: [
    CommonModule,
    MatchesRoutingModule
  ]
})
export class MatchesModule { }

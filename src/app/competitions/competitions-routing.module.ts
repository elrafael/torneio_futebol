import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionsComponent } from './competitions.component';
import { ListCompetitionsComponent } from './list-competitions/list-competitions.component';
import { StandingsComponent } from './standings/standings.component';

const routes: Routes = [
  { path: '', component: CompetitionsComponent },
  { path: 'list', component: ListCompetitionsComponent },
  { path: 'standings/:id', component: StandingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitionsRoutingModule {}

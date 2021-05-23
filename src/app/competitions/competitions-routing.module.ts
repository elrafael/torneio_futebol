import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionsComponent } from './competitions.component';
import { ListComponent } from './list/list.component';
import { StandingsComponent } from './standings/standings.component';

const routes: Routes = [
  { path: '', component: CompetitionsComponent },
  { path: 'list', component: ListComponent },
  { path: 'standings/:id', component: StandingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitionsRoutingModule { }

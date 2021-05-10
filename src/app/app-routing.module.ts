import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetitionsComponent } from './competitions/competitions.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatchesComponent } from './matches/matches.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'matches', component: FixturesComponent },
  { path: 'competitions', component: CompetitionsComponent },
  { path: 'matches/:competition', component: MatchesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

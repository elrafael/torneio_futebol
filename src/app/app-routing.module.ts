import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'competitions', loadChildren: () => import('./competitions/competitions.module').then(m => m.CompetitionsModule) }, { path: 'standings', loadChildren: () => import('./standings/standings.module').then(m => m.StandingsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

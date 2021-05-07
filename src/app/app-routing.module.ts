import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixturesComponent } from './fixtures/fixtures.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'fixtures', component: FixturesComponent },
  { path: 'homepage', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

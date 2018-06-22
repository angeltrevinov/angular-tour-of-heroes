import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  /*When the web app starts*/
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  /*A dashboard with the top 5 heroes*/
  { path: 'dashboard', component: DashboardComponent },
  /*The details of the hero with a certian id*/
  { path: 'detail/:id', component: HeroDetailComponent},
  /*For the list of the heroes*/
  { path: 'heroes', component: HeroesComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],

  exports: [ RouterModule ],
})

export class AppRoutingModule { }

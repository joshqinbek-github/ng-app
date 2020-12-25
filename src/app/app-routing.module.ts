import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes = [
  {path: '', redirectTo: "all", pathMatch: "full"},
  {path: 'all', component: AllComponent},
  {path: 'upcoming', component: UpcomingComponent},
  {path: "**", redirectTo: '/all'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

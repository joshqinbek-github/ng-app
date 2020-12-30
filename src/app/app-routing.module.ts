import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AllComponent } from './all/all.component';
import { UsersComponent } from './all/users/users.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes = [
  {path: '', component: AllComponent,  children: [
    {path: '', pathMatch: "full", component: UsersComponent},
    {path: 'addClient', component: AddUserComponent},
    {path: 'edit/:id', component: AddUserComponent},



  ]},
  {path: 'upcoming', component: UpcomingComponent},
  {path: "**", redirectTo: '', pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

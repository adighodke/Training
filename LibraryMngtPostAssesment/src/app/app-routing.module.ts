import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { RequestsComponent } from './Admin/requests/requests.component';
import { LoginComponent } from './shared/login/login.component';
import { UserDashComponent } from './User/user-dash/user-dash.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'userdash', component:UserDashComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

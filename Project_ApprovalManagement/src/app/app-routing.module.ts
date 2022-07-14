import { RegisterComponent } from './component/shared/register/register.component';
import { LoginComponent } from './component/shared/login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './component/shared/home/home.component';
import { AboutusComponent } from './component/shared/aboutus/aboutus.component';
import { EmpHomeComponent } from './component/user/emp-home/emp-home.component';
import { EmpRequestsComponent } from './component/user/emp-requests/emp-requests.component';
import { EmpHistoryComponent } from './component/user/emp-history/emp-history.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { AdminHistoryComponent } from './component/admin/admin-history/admin-history.component';
import { AdminRequestsComponent } from './component/admin/admin-requests/admin-requests.component';
import { AdminEmpRequestsComponent } from './component/admin/admin-emp-requests/admin-emp-requests.component';
import { AdminEmpHistoryComponent } from './component/admin/admin-emp-history/admin-emp-history.component';

const routes: Routes = [
  {path:'', component:HomeComponent,pathMatch:'full'},
  //{path:'home', component:HomeComponent},
  // {path:'login', component:LoginComponent},
  // {path:'register', component:RegisterComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'emphome', component:EmpHomeComponent},
  {path:'emprequests', component:EmpRequestsComponent},
  {path:'emphistory', component:EmpHistoryComponent},
  {path:'adminhome', component:AdminHomeComponent},
  {path:'adminhistory',component:AdminHistoryComponent},
  {path:'adminrequests', component:AdminRequestsComponent},
  {path:'admin_emprequests',component:AdminEmpRequestsComponent},
  {path:'admin_emphistory', component:AdminEmpHistoryComponent}


  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable object-property-newline */
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { DatabindingComponent } from './databinding/databinding.component'
import { AboutusComponent } from './aboutus/aboutus.component'
import { HomeComponent } from './home/home.component'
import { NgModule, Component } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MenuComponent } from './menu/menu.component'

import { DepartmentComponent } from './department/department.component'
import { TechnologyComponent } from './technology/technology.component'
import { CeoComponent } from './ceo/ceo.component'
import { CtoComponent } from './cto/cto.component'
import { DirectorComponent } from './director/director.component'
import { HeadSEComponent } from './head-se/head-se.component'
import { EnggmanagerComponent } from './enggmanager/enggmanager.component'
import { TechleadComponent } from './techlead/techlead.component'
import { SseComponent } from './sse/sse.component'
import { Se3Component } from './se3/se3.component'
import { Se2Component } from './se2/se2.component'
import { Se1Component } from './se1/se1.component'
import { EmployeesComponent } from './employees/employees.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutusComponent},
  {path: 'binding', component: DatabindingComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'department', component: DepartmentComponent, children: [
    {path: 'technology', component: TechnologyComponent, children: [
      {path: 'ceo', component: CeoComponent, children: [
        {path: 'cto', component: CtoComponent, children: [
          {path: 'director', component: DirectorComponent, children: [
            {path: 'head-se', component: HeadSEComponent, children: [
              {path: 'enggmanager', component: EnggmanagerComponent, children: [
                {path: 'techlead', component: TechleadComponent, children: [
                {path: 'sse', component: SseComponent, children: [
                  {path: 'se3', component: Se3Component, children: [
                    {path: 'se2', component: Se2Component, children: [
                      {path: 'se1', component: Se1Component}
                    ]}
                  ]}
                ]}
              ]}
              ]}
            ]}
          ]}
        ]}
      ]}
    ]}
  ]},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

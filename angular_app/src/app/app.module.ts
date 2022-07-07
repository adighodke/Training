import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuComponent } from './menu/menu.component';
import { DepartmentComponent } from './department/department.component';
import { TechnologyComponent } from './technology/technology.component';
import { CeoComponent } from './ceo/ceo.component';
import { CtoComponent } from './cto/cto.component';
import { DirectorComponent } from './director/director.component';
import { HeadSEComponent } from './head-se/head-se.component';
import { EnggmanagerComponent } from './enggmanager/enggmanager.component';
import { TechleadComponent } from './techlead/techlead.component';
import { SseComponent } from './sse/sse.component';
import { Se1Component } from './se1/se1.component';
import { Se2Component } from './se2/se2.component';
import { Se3Component } from './se3/se3.component';
import { HighlightDirective } from './highlight.directive';
import { EmployeesComponent } from './employees/employees.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    DatabindingComponent,
    PageNotFoundComponent,
    MenuComponent,
    DepartmentComponent,
    TechnologyComponent,
    CeoComponent,
    CtoComponent,
    DirectorComponent,
    HeadSEComponent,
    EnggmanagerComponent,
    TechleadComponent,
    SseComponent,
    Se1Component,
    Se2Component,
    Se3Component,
    HighlightDirective,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

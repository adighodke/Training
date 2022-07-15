import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/shared/home/home.component';
import { LoginComponent } from './component/shared/login/login.component';
import { RegisterComponent } from './component/shared/register/register.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutusComponent } from './component/shared/aboutus/aboutus.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule,  } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { EmpHomeComponent } from './component/user/emp-home/emp-home.component';
import { EmpHistoryComponent } from './component/user/emp-history/emp-history.component';
import { EmpNavComponent } from './component/user/emp-nav/emp-nav.component';
import { EmpRequestsComponent } from './component/user/emp-requests/emp-requests.component';
import { EmpUploadbillComponent } from './component/user/emp-uploadbill/emp-uploadbill.component';
import { AdminHistoryComponent } from './component/admin/admin-history/admin-history.component';
import { AdminHomeComponent } from './component/admin/admin-home/admin-home.component';
import { AdminNavComponent } from './component/admin/admin-nav/admin-nav.component';
import { AdminRequestsComponent } from './component/admin/admin-requests/admin-requests.component';
import { AdminUploadbillComponent } from './component/admin/admin-uploadbill/admin-uploadbill.component';
import { AdminEmpRequestsComponent } from './component/admin/admin-emp-requests/admin-emp-requests.component';
import { AdminEmpHistoryComponent } from './component/admin/admin-emp-history/admin-emp-history.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    AboutusComponent,
    EmpHomeComponent,
    EmpHistoryComponent,
    EmpNavComponent,
    EmpRequestsComponent,
    EmpUploadbillComponent,
    AdminHistoryComponent,
    AdminHomeComponent,
    AdminNavComponent,
    AdminRequestsComponent,
    AdminUploadbillComponent,
    AdminEmpRequestsComponent,
    AdminEmpHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

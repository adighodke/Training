import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private dailog:MatDialog) { }

  ngOnInit(): void {
  }
  openReg(){
    this.dailog.open(RegisterComponent)
  }
  openLogin(){
    this.dailog.open(LoginComponent)
  }

}

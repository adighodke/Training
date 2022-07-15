import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

  name:any;
  constructor(public service:AuthenticateService,private router:Router) { }

  ngOnInit(): void {
    this.name=this.service.isAuthenticated;
  }
  logOut(){
    this.service.isAuthenticated=false;
    this.router.navigate([""])
  }

}

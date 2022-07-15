import { Route, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-emp-nav',
  templateUrl: './emp-nav.component.html',
  styleUrls: ['./emp-nav.component.css']
})
export class EmpNavComponent implements OnInit {
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

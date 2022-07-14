import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  submit()
  {
    console.log("Form Submitted")
  }

  constructor(private router:Router, private matDialog:MatDialog) { }
  ngOnInit(): void {
    
  }

  loginme(){
    // this.router.navigateByUrl('admin');  
    this.matDialog.closeAll();
 }

}

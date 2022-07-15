import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // hide = true;
  // submit()
  // {
  //   console.log("Form Submitted")
  // }

  constructor(private router:Router, private matDialog:MatDialog, private service:AuthenticateService) { }
  ngOnInit(): void {
    }
public onSubmit(form:NgForm){
  this.service.authenticateEmployee(form.value);
  this.matDialog.closeAll();
}
//   loginme(){
 
//     this.matDialog.closeAll();
//  }

}

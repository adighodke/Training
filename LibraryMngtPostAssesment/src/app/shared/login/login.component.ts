import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private matdialog: MatDialog, private toast: NgToastService) {}

  username: string | undefined;

  password: string | undefined;

  ngOnInit() {}

  login(): void {
    if (this.username == 'user' && this.password == 'user') {
      this.router.navigate(['userdash']);
    } else if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(['dashboard']);
      this.toast.success({detail:"Login success", summary:"welcome",duration:5000})
    } else {
        this.toast.error({detail:"Invalid password", summary:"login failed",duration:5000})
    }

    this.matdialog.closeAll();
  }
}

import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private matdialog: MatDialog) {}

  username: string | undefined;

  password: string | undefined;

  ngOnInit() {}

  login(): void {
    if (this.username == 'user' && this.password == 'user') {
      this.router.navigate(['userdash']);
    } else if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(['dashboard']);
    } else {
      alert('Invalid credentials');
    }

    this.matdialog.closeAll();
  }
}

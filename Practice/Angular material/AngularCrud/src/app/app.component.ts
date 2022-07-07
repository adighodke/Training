import { DailogComponent } from './dailog/dailog.component';
import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularCrud';

  constructor(private dailog : MatDialog){

  }
  openDialog() {
    this.dailog.open(DailogComponent, {
     width:'30%'
    });
  }
}

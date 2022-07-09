import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/services/api.service';
import { ReqapiService } from 'src/app/services/reqapi.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css'],
})
export class MyBooksComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  actionbtn: string = 'Book Request List';

  // actionBtn = 'done';
  // color = 'success';

  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'id',
    'bookName',
    'authorName',
    'publication',
    'action',
  ];

  constructor(private api: ApiService, private toast: NgToastService, private reqapi : ReqapiService) {}

  ngOnInit(): void {
    this.getAllRequests();
  }

  getAllRequests() {
    
    this.reqapi.issuedBook().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        console.log(res);
        },
      error: (err) => {
        this.toast.error({
          detail: 'Error while fetching the dat',
          duration: 5000,
        });
      },
    });
  }

}

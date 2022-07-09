import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ApiService } from 'src/app/services/api.service';
import { ReqapiService } from 'src/app/services/reqapi.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
})
export class RequestsComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;
  acceptForm!: FormGroup;
  actionbtn: string = 'Book Request List';

  actionBtn = 'done';
  color = 'success';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = [
    'id',
    'bookName',
    'authorName',
    'publication',
    'price',
    'quantity',
    'action',
  ];


  constructor(
    private api: ApiService,
    private toast: NgToastService,
    private reqBook: ReqapiService,
    private formbuilder: FormBuilder,
    private router : Router,
    private date :Date
  ) {}

  ngOnInit(): void {
    this.acceptForm = this.formbuilder.group({
      id: ['', Validators.required],
      bookName: ['', Validators.required],
      authorName: ['', Validators.required],
      publication: ['', Validators.required],
    });

    this.getAllRequests();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllRequests() {
    // this.actionbtn = "Request List"

    this.api.getRequest().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(res);
        // this.no = res.length;
      },
      error: (err) => {
        // alert("Error while fetching the data")
        this.toast.success({
          detail: 'Error while fetching the data',
          duration: 5000,
        });
      },
    });
  }

  // issued(data: any) {
    
  //   this.acceptForm.controls['id'].setValue(data.id);
  //   this.acceptForm.controls['bookName'].setValue(data.bookName);
  //   this.acceptForm.controls['authorName'].setValue(data.authorName);
  //   this.acceptForm.controls['publication'].setValue(data.publication);
  // }

  issued(data : any){
  
        this.acceptForm.controls['id'].setValue(data.id);
        this.acceptForm.controls['bookName'].setValue(data.bookName);
        this.acceptForm.controls['authorName'].setValue(data.authorName);
        this.acceptForm.controls['publication'].setValue(data.publication);
      console.log(this.acceptForm.value)
    this.api.acceptedBook(this.acceptForm.value).subscribe({
      next:(res)=>{
      this.actionBtn = 'check_box';
      this.color = 'warn';
      this.toast.success({
        detail: 'Accepted',
        summary: 'Request for Book Accepted!',
        duration: 5000,
      
      });
    }
    })

    
 

   }
}

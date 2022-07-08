import { NgToastService } from 'ng-angular-popup';
import { ApiService } from './../../services/api.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBookComponent } from '../add-book/add-book.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RequestsComponent } from '../requests/requests.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'bookName',
    'authorName',
    'publication',
    'price',
    'quantity',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dailog: MatDialog,
    private api: ApiService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    this.getAllBooks();
  }
  addbook() {
    this.dailog
      .open(AddBookComponent, {
        width: '500px',
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'save') {
          this.getAllBooks();
        }
      });
  }
  getAllBooks() {
    this.api.getBook().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert('Error in fetching');
      },
    });
  }

  editBook(row: any) {
    this.dailog
      .open(AddBookComponent, {
        width: '30%',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val === 'update') {
          this.getAllBooks();
        }
      });
  }
  deleteBook(id: number) {
    this.api.deleteBook(id).subscribe({
      next: (res) => {
        this.toast.warning({
          detail: 'Deleted',
          summary: 'Book deleted sucessfully!',
          duration: 4000,
        });
        this.getAllBooks();
      },
      error: () => {
        alert('error while deleting');
      },
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  requests() {
    this.dailog.open(RequestsComponent, {
      width: '800px',
    });
  }
}

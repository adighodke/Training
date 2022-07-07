import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddBookComponent } from 'src/app/Admin/add-book/add-book.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {
  displayedColumns: string[] = ['id','bookName', 'authorName', 'publication', 'price','quantity','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api: ApiService, private dailog: MatDialog) { }

  ngOnInit(): void {
    
      this.getAllBooks();
    
  }
  getAllBooks(){
    this.api.getBook()
      .subscribe({
        next:(res)=>{
          this.dataSource= new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          
        },
        error:(err)=>{
          alert("Error in fetching")
        }
      })
 }
 reqBook(row :any){
  this.api.getBook()
 }
 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}
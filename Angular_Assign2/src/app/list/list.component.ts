import { ApiService } from './../services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DailogComponent } from '../dailog/dailog.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  //@ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'id',
    'from',
    'to',
    'dateCreated',
    'permanentLink',
  ];
  dataSource!: MatTableDataSource<any>;
  constructor(public dailog: MatDialog, private api: ApiService) {

  }

  
  openDialog() {
    this.dailog.open(DailogComponent, {
      width: 'auto',
    });
  }
  getAllurl(){
    this.api.getUrl()
      this.api.getUrl()
      .subscribe({
        next:(res)=>{
          this.dataSource= new MatTableDataSource();
         // this.dataSource.paginator = this.paginator;
        },
        error:(err)=>{
          alert("error")
        }
      })
    }
  
    

  ngOnInit(): void {
    this.getAllurl();
  //   this.api.getUrl().subscribe((data:any)=>{
       
  //     ELEMENT_DATA.push(data);
  //     console.log(ELEMENT_DATA)
  //     }
     
  //   );
  // }
}

}

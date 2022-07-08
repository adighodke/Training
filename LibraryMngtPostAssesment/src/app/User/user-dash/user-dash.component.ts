import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddBookComponent } from 'src/app/Admin/add-book/add-book.component';
import { ApiService } from 'src/app/services/api.service';
import { NgToastService } from 'ng-angular-popup';
import { ReqapiService } from 'src/app/services/reqapi.service';

@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {
  displayedColumns: string[] = ['id','bookName', 'authorName', 'publication', 'price','quantity','action'];
  dataSource!: MatTableDataSource<any>;
  no:any;
  count:number=0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  requestForm!: FormGroup;

  constructor(private api: ApiService, private dailog: MatDialog,private formbuilder:FormBuilder, private toast:NgToastService , private reqapi:ReqapiService) { }

  ngOnInit(): void {
    this.requestForm=this.formbuilder.group({

      id:['',Validators.required],
      bookName:['',Validators.required],
      authorName:['',Validators.required],
      publication:['',Validators.required],
      price:['',Validators.required],
      quantity:['',Validators.required],
      })

    this.getAllBooks();
   
  }


  getAllBooks(){
    this.api.getBook().subscribe({
      next:(res)=>{
        this.dataSource=new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
      },
      error:(err)=>{
        // alert("Error while fetching the data")
        this.toast.error({detail:"Error while fetching the data", summary:"something went wrong",duration:5000});
      }
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  // all about  user request operation .......................................
  sendRequest(no:any){
    if(no>2){
    //  alert("You cross the limit");
     this.toast.error({detail:"Limit Exceds", summary:"Max 3 Book available!!!",duration:5000});
    }
    else{

     
     {

      console.log(this.requestForm.value)
       this.reqapi.reqBook(this.requestForm.value)
       .subscribe({
         next:(res)=>{
          //  alert("Request send successfully")
           this.toast.success({detail:"Request send successfully", summary:"Thank You",duration:5000});
           
         }
       })
     }
    }
   }

  reqBook(data:any){
    
    this.requestForm.controls['id'].setValue(data.id);
    this.requestForm.controls['bookName'].setValue(data.bookName);
    this.requestForm.controls['authorName'].setValue(data.authorName);
    this.requestForm.controls['publication'].setValue(data.publication);
    this.requestForm.controls['quantity'].setValue(data.quantity);
    this.requestForm.controls['price'].setValue(data.price);
    this.sendRequest(this.count);
    this.count++;
    console.log(this.count);
    }


   
    getAllRequests(){
      this.api.getBook()
      .subscribe({
        next:(res)=>{
          this.dataSource=new MatTableDataSource(res);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort
          this.no = res.length;
        },
        error:(err)=>{
          alert("Error while fetching the data")
        }
      })
  }

}
import { ApiService } from './../services/api.service';
// import { Url, ListComponent } from './../list/list.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.css']
})
export class DailogComponent implements OnInit {
  displayedColumns: string[] = ['id', 'from', 'to', 'dateCreated','permanentLink'];
  UrlForm!:FormGroup;
  constructor(private formBuilder: FormBuilder, private api:ApiService, private dailogRef : MatDialogRef<DailogComponent>) { }

  ngOnInit(): void {
    this.UrlForm = this.formBuilder.group({
      id:['',Validators.required],
      from:['',Validators.required],
      to:['',Validators.required],
      dateCreated:['',Validators.required],
      permanentLink:['',Validators.required]

    })
  }
  addUrl(){
    if(this.UrlForm.valid){
      this.api.postUrl(this.UrlForm.value)
      .subscribe({
        next:(res)=>{
          alert("URL added successfully");
          this.UrlForm.reset();
          this.dailogRef.close('save');
        },
        error:()=>{
          alert("error")
        }
        
      })
      
    }
    
  }

}

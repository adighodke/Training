import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup

  constructor(private matDialog:MatDialog, private dailogRef: MatDialogRef<RegisterComponent>,private formBuilder: FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      empId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      role: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  register(){
    if(this.registerForm.valid){
      this.api.postRegister(this.registerForm.value).subscribe({
        next:(res)=>{
          //this.matDialog.closeAll();
          this.dailogRef.close('save');
          alert('registration success');
        },
        error:() =>{
          alert('error');
        }
      });
    }


  }

}

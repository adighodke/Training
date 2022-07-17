import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  admRequestForm!: FormGroup;

  constructor(private formBuilder:FormBuilder) { 

    this.admRequestForm = this.formBuilder.group({

      purpose: ['', Validators.required],
      description: ['', Validators.required],
      approver: ['', Validators.required],
      estAmount: ['', Validators.required],
      advAmount: ['', Validators.required],
      date: ['', Validators.required]
    });

  }


  ngOnInit(): void {
  }

  onSubmit(){
  
  }

}

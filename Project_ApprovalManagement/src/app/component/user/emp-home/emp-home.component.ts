import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-home',
  templateUrl: './emp-home.component.html',
  styleUrls: ['./emp-home.component.css']
})
export class EmpHomeComponent implements OnInit {
  requestForm!: FormGroup;

  constructor(private formBuilder:FormBuilder) { 

  this.requestForm = this.formBuilder.group({
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
  submit(){}

}

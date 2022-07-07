/* eslint-disable no-useless-constructor */
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  searchText:any
  employees = [
    { id: 11, name: 'Aditya G', country: 'India' },
    { id: 12, name: 'Abhijeet G', country: 'India' },
    { id: 13, name: 'Hasan', country: 'Turkey' },
    { id: 14, name: 'Tom Cruise', country: 'UK' },
    { id: 15, name: 'Homelander', country: 'USA' },
    { id: 16, name: 'Shinju', country: 'Japan' }
  ]

  constructor () { }

  ngOnInit (): void {
  }
}

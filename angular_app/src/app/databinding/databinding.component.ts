import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  message:String="Welcome to Data Binding";
  twoWay:string="two way";
  
  constructor() { }
  
  ngOnInit(): void {
    
  }

  public showdata(){
    alert("show data");
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReqapiService {

  constructor(private http:HttpClient) { }
  reqBook(data:any){
    return this.http.post<any>("http://localhost:3000/reqList/",data)
  }
}

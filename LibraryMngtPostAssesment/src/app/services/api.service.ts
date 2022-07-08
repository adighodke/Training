import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  postBook(data: any){
    return this.http.post<any>("http://localhost:3000/bookList/", data);
  }
  getBook(){
    return this.http.get<any>("http://localhost:3000/bookList/");
  }
  patchBook(data:any,id : number){
    return this.http.put<any>("http://localhost:3000/bookList/"+id, data);
  }
  deleteBook(id:number){
    return this.http.delete<any>("http://localhost:3000/bookList/"+id);
  }
  getRequest(){
    return this.http.get<any>(" http://localhost:3000/reqList")
  }
}

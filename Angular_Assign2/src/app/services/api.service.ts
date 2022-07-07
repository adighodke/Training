import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
postUrl( data : any){
  return this.http.post<any>("http://localhost:3000/Url/", data);
}
getUrl(){
  return this.http.get(" http://localhost:3000/Url/");
}
}

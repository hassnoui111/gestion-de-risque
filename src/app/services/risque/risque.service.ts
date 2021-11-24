import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class risqueService {
  public url="http://localhost:8080/rest/api/";

  constructor(private http:HttpClient) { }

  allrisque(token){
    var headers_options = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_options
    };
    return this.http.get<any>(this.url+"allrisque",httpOptions);
  }

  getrisque(id:number,token){
    var headers_obejet = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_obejet
    };
    return this.http.get<any>(this.url+"risque/"+id,httpOptions);
  }

  addrisque(risque:Object,token){
    var headers_options = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_options
    };
    return this.http.post<any>(this.url+"addrisque",risque,httpOptions);
  }

  updaterisque(id:number,risque:Object,token){
    var headers_obejet = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_obejet
    };
    return this.http.put<any>(this.url+"risque/"+id,risque,httpOptions);
  }

  deleterisque(id:number,token){
    var headers_options = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_options
    };
    return this.http.delete<any>(this.url+"risque/"+id,httpOptions);
  }
}

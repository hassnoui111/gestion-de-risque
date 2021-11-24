import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class risqueService {
  public url="http://localhost:8080/rest/api/";

  constructor(private http:HttpClient) { }

  allrisque(token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.get<any>(this.url+"allrisque",httpOptions);
  }

  getrisque(id:number,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.get<any>(this.url+"produit/"+id,httpOptions);
  }

  addrisque(risque:Object,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.post<any>(this.url+"addProduit",risque,httpOptions);
  }

  updaterisque(id:number,produit:Object,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.put<any>(this.url+"risque/"+id,produit,httpOptions);
  }

  deleterisque(id:number,token){
    var headers_object = new HttpHeaders().set("Authorization",token);
    const httpOptions ={
      headers: headers_object
    };
    return this.http.delete<any>(this.url+"produit/"+id,httpOptions);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = 'https://api.genderize.io/?name='
  constructor(private http:HttpClient) { }

  Predict(data:any){
    return this.http.get(this.url+data.name);
  }
}

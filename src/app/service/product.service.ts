import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.API+"product";
  }

  getListProducts(){
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + `/getListProduct`).subscribe(response => {
        resolve(response);
      }), err => {
        reject(err);
      }
    })
  }

  delete(id: number){
    let url = this.baseUrl.concat('/delete/',id)
    return new Promise((resolve, reject) => {
      this.http.delete(url).subscribe(result => {
        resolve(result);
        
      }), err => {
        reject(err);
      }
    })
  }

  


}

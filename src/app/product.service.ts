import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  getProducts(searchKey:String=null,searchQuery:String=null) {
    let url : string = this.url + "/product"
    if(searchKey && searchQuery) {
      url += `?searchKey=${searchKey}&searchQuery=${searchQuery}`
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'authentication' : localStorage.getItem('token'),
        'Content-Type':  'application/json'
      })
    };
     return this.http.get(url,httpOptions)
  }
   addProduct(product : any,sellerId : any) {
    let url : string = this.url + "/product"
    let category = product.category
    product.seller = {
      id : sellerId
    }
    product.category = {
      id : category
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'authentication' : localStorage.getItem('token'),
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(url,product,httpOptions)
  }

  getProduct(productid : any){
    return this.http.get(this.url + "/product/" + productid)
  }

}

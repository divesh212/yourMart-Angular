import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url: string = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  // getProducts(searchKey:String=null,searchQuery:String=null) {
  //   let url : string = this.url + "/product"
  //   if(searchKey && searchQuery) {
  //     url += `?searchKey=${searchKey}&searchQuery=${searchQuery}`
  //   }

  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'authentication' : localStorage.getItem('token'),
  //       'Content-Type':  'application/json'
  //     })
  //   };
  //    return this.http.get(url,httpOptions)
  // }

  getProducts(searchBy: string = null, searchValue: string = null, sortBy: string = null, status: number = null, category: number = null) {
    let requestUrl: string = this.url + "/product"+'?'
    if (searchBy && searchValue) {
      requestUrl += `searchKey=${searchBy}&searchQuery=${searchValue}&`
    }
    if (status) {
      requestUrl += `status=${status}&`
    }
    if (category) {
      requestUrl += `category=${category}&`
    }
    if (sortBy) {
      requestUrl += `sortBy=${sortBy}`
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'authentication': localStorage.getItem('token'),
        'Content-Type': 'application/json'
      })
    };
    return this.http.get(requestUrl, httpOptions)
  }

   addProduct(product : any,sellerId : any) {
    let url : string = this.url + "/product"
    let category = product.category
    product.seller = {
      id : sellerId
    }
    product.status = "new"
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

  getProductById(productId) {
    const url = this.url + "/product/"+productId;

    const httpOptions = {
      headers: new HttpHeaders({
        'authentication' : localStorage.getItem('token'),
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(url,httpOptions)
  }

  getCategories() {
    let url = this.url + "/category"
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(url,httpOptions)
  }

}

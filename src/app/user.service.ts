import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:8080"
  currentUsername = new Subject<string>()

  constructor(private http: HttpClient) {

   }

   loginUser(user: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.url+"/seller/login",user)
  }
   setUsername(username: string) {
    this.currentUsername.next(username)
  }
}

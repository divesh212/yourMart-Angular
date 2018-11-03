import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password : string
  email : string
  loginForm : FormGroup
  currentUsername = new Subject<string>()
  validationMessages = {
    'id': [
    { type: 'required', message: 'id is required' }
    ],
    'password': [
    { type: 'required', message: 'password is required' }
    ]
    }

  constructor(private formBuilder: FormBuilder,
              private router: Router, private userService: UserService) {
    this.loginForm = this.formBuilder.group({
      id: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {
         
  }

  onSubmit() {
    if(this.loginForm.valid) {
      console.log(this.loginForm.value);
      
      this.userService.loginUser(this.loginForm.value).subscribe((response : any) => {
        localStorage.setItem("token",response.token);
        localStorage.setItem("sellerid",response.id);
        this.userService.setUsername(response.ownerName);
        console.log("Token: "+response.token);
        this.router.navigate(['/'])
      })
    }
  }
   setUsername(username: string) {
    this.currentUsername.next(username)
  }
   // getCurrentUser(){
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'authorization': 'Token '+ localStorage.getItem('token')
  //     })
  //   };
  //   return this.http.get(this.currentUserUrl,httpOptions);
  // }

}

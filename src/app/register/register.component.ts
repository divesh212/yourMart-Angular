import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup

  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router: Router) {
      this.registerForm = this.formBuilder.group({
        companyName: ['', Validators.compose([Validators.required])],
        ownerName: ['', Validators.compose([Validators.required])],
        address: ['', Validators.compose([Validators.required])],
        email: ['', Validators.compose([Validators.required])],
        phone: ['', Validators.compose([Validators.required])],
        gstNumber: ['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.required])]
      });
    }

  ngOnInit() {
  }

  saveSeller() {
    if(this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.userService.addSeller(this.registerForm.value,1).subscribe((response : any) => {
        this.router.navigate(['/login'])
        
      },(error) => {
        console.log(error);
        
      })
    }
  }

}

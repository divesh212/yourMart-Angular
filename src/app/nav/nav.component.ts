import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  username : string
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
    this.userService.currentUsername.subscribe(username => {
      this.username = username
    })
  }

  logout(){
    localStorage.clear();
    this.userService.setUsername(null);
    this.router.navigate(['/login']);
  }
  

}
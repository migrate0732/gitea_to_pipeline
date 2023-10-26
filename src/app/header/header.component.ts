import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userAccess:boolean;

  constructor(private user:UserService) { 
    console.log(this.user.isLogin)
    this.userAccess=this.user.isLogin;
    console.log(this.userAccess);
  }

  ngOnInit(): void {
  
    

  }

}

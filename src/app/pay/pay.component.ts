import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  data:any;

  constructor(private userData:UserService,private router:Router) { }

  ngOnInit() {
    this.data=this.userData.data;
  }
  isLoggedOut(){
    this.router.navigate(["/login"])
    this.userData.isLogin=false;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private router:Router , private userService:UserService) { }

  ngOnInit(): void {
    this.loginForm= new FormGroup({
      'email': new FormControl(null,[Validators.required]),
      'password': new FormControl(null,[Validators.required ,Validators.minLength(4)])
    })
    if(this.userService.isLogin){
      this.router.navigate(["payment/history"])
    }
  }
  onSubmit(){
    // console.log(this.loginForm.value);
    this.userService.isloggedIn(this.loginForm.value.email,this.loginForm.value.password)
    this.router.navigate(["payment/history"]);
  }

}

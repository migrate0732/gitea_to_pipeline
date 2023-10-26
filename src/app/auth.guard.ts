import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private user :UserService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
      
      if(!this.user.isLogin){
        alert("Invalid Credentials \n Enter Valid Credentials to Login")
        this.router.navigate(['login']);
      }
    return this.user.isLogin;
    // return true;
  }
  
}

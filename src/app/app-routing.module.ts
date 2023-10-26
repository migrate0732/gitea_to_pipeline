import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { PayComponent } from './pay/pay.component';

const routes: Routes = [
  {
    path:"login",  component: LoginComponent 
  },

  {
    path:"payment/history", canActivate:[AuthGuard], component:PayComponent
  },

  {
    path:"**",component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

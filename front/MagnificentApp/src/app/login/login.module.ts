import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { PrimeNGModule } from '../primeng.module';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    PrimeNGModule,
    FormsModule
  ],
  declarations: [LoginComponent, LoginPopupComponent],
  exports: [LoginComponent]
})
export class LoginModule { }

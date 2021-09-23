import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { LoginModule } from '../core/login/login.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    LoginModule,
    AppRoutingModule
  ],
  exports: [MainComponent]
})
export class MainModule { }

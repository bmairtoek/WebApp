import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    PasswordModule,
    DividerModule
  ],
  exports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    PasswordModule,
    DividerModule
  ]
})
export class PrimeNGModule { }
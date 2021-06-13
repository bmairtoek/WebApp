import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import {SelectButtonModule} from 'primeng/selectbutton';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    PasswordModule,
    DividerModule,
    InputTextModule,
    InputTextareaModule,
    CardModule,
    CheckboxModule,
    RadioButtonModule,
    InputNumberModule,
    SelectButtonModule
  ],
  exports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    PasswordModule,
    DividerModule,
    InputTextModule,
    InputTextareaModule,
    CardModule,
    CheckboxModule,
    RadioButtonModule,
    InputNumberModule,
    SelectButtonModule
  ]
})
export class PrimeNGModule { }
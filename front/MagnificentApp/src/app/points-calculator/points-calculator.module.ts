import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointsCalculatorFormComponent } from './points-calculator-form/points-calculator-form.component';
import { PrimeNGModule } from '../primeng.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PrimeNGModule,
    FormsModule
  ],
  declarations: [PointsCalculatorFormComponent],
  exports: [PointsCalculatorFormComponent]
})
export class PointsCalculatorModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { PointsCalculatorFormComponent } from './points-calculator-form/points-calculator-form.component';
import { PrimeNGModule } from '../primeng.module';
import { effects } from '../../app/store/effects';
import { reducers } from '../../app/store/reducers';
import { PointsCalculationService } from '../services';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    PrimeNGModule,
    FormsModule,
    StoreModule.forFeature('pointsCounter', reducers),
    EffectsModule.forFeature(effects),
    HttpClientModule
  ],
  declarations: [PointsCalculatorFormComponent],
  providers: [PointsCalculationService, HttpClient],
  exports: [PointsCalculatorFormComponent]
})
export class PointsCalculatorModule { }

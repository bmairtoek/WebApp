import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PointsCounterDto } from 'src/app/models/points-counter-dto.model';

import * as fromStore from '../../store';

@Component({
  selector: 'app-points-calculator-form',
  templateUrl: './points-calculator-form.component.html',
  styleUrls: ['./points-calculator-form.component.scss']
})
export class PointsCalculatorFormComponent implements OnInit {
  public pointsCounterDto: PointsCounterDto = new PointsCounterDto();
  public points$: Observable<number | null>;
  
  stateOptions = [{label: 'Tak', value: true}, {label: 'Nie', value: false}];

  constructor(private store: Store<fromStore.PointsCounterState>) 
  { 
    this.points$ = this.store.select(fromStore.getCalculatedPoints);
  }

  ngOnInit() { }

  public submit(): void {
    this.store.dispatch(new fromStore.CalculatePoints({...this.pointsCounterDto}));
  }
}

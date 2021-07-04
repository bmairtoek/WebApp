import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as pointsActions from '../actions/points.action';
import * as pointsServices from '../../services';

@Injectable()
export class PointsEffects {
  constructor(
    private actions$: Actions,
    private pizzaService: pointsServices.PointsCalculationService
  ) {}

  loadPizzas$ = createEffect(() => 
    this.actions$.pipe(
      ofType(pointsActions.CALCULATE_POINTS),
      map((action: pointsActions.CalculatePoints) => action.payload),
      switchMap((dto) => {
        return this.pizzaService
          .getPoints(dto)
          .pipe(
            map(points => new pointsActions.CalculatePointsSuccess(points)),
            catchError(error => of(new pointsActions.CalculatePointsFail(error)))
          );
      })
    )
  );
}
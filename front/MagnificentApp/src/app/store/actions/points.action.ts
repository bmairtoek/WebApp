import { Action } from '@ngrx/store';

import { PointsCounterDto } from '../../models/points-counter-dto.model';

export const CALCULATE_POINTS = '[Points Calculator] Calculate Points';
export const CALCULATE_POINTS_FAIL = '[Points Calculator] Calculate Points Fail';
export const CALCULATE_POINTS_SUCCESS = '[Points Calculator] Calculate Points Success';

export class CalculatePoints implements Action {
  readonly type = CALCULATE_POINTS;
  constructor(public payload: PointsCounterDto) {}
}

export class CalculatePointsFail implements Action {
  readonly type = CALCULATE_POINTS_FAIL;
  constructor(public payload: any) {}
}

export class CalculatePointsSuccess implements Action {
  readonly type = CALCULATE_POINTS_SUCCESS;
  constructor(public payload: number) {}
}

// action types
export type CalculatePointsAction = CalculatePoints | CalculatePointsFail | CalculatePointsSuccess;
import {
  ActionReducerMap
} from '@ngrx/store';

import * as fromPointsReducer from './points.reducer';

export interface PointsCounterState {
  calculations: fromPointsReducer.CalculationState;
}

export const reducers: ActionReducerMap<PointsCounterState, any> = {
  calculations: fromPointsReducer.reducer,
};

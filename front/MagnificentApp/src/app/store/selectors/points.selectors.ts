import { createFeatureSelector, createSelector } from "@ngrx/store";

import { PointsCounterState } from "../reducers";
import * as fromPointsReducer from '../reducers/points.reducer'

export const getPointsCounterState = createFeatureSelector<PointsCounterState>(
    'pointsCounter'
);

export const getPointsCalculationState = createSelector(
    getPointsCounterState,
    (state: PointsCounterState) => state.calculations
);

export const getCalculatedPoints = createSelector(
    getPointsCalculationState,
    fromPointsReducer.getPoints
);
  
export const getPointsLoaded = createSelector(
    getPointsCalculationState,
    fromPointsReducer.getPointsLoaded
);
export const getPointsLoading = createSelector(
    getPointsCalculationState,
    fromPointsReducer.getPointsLoading
);
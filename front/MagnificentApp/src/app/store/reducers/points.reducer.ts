import * as fromPointsActions from '../actions/points.action'

export interface CalculationState {
  points: number | null;
  loaded: boolean;
  loading: boolean;
}

const initialState: CalculationState = {
  points: null,
  loaded: false,
  loading: false,
};

export function reducer(
  state: CalculationState = initialState,
  action: fromPointsActions.CalculatePointsAction
): CalculationState {
  switch (action.type) {
    case fromPointsActions.CALCULATE_POINTS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromPointsActions.CALCULATE_POINTS_SUCCESS: {
      const calculationResult = action.payload;

      return {
        ...state,
        loading: false,
        loaded: true,
        points: calculationResult,
      };
    }

    case fromPointsActions.CALCULATE_POINTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  return state;
}

export const getPoints = (state: CalculationState) => state.points;
export const getPointsLoading = (state: CalculationState) => state.loading;
export const getPointsLoaded = (state: CalculationState) => state.loaded;
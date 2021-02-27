import { createReducer } from 'typesafe-actions';
import * as actions from './actions';
import { AppActions, AppState, City, Court } from './types';

const initialState: AppState = {
  selectedCity: '',
  cities: [] as City[],
  cityQuery: '',
  courts: [] as Court[],
  selectedCourt: '',
};

export const appReducer = createReducer<AppState, AppActions>(initialState)
  .handleAction(actions.setSelectedCity, (state, action) => ({
    ...state,
    selectedCity: action.payload,
  }))
  .handleAction(actions.setCities, (state, action) => ({
    ...state,
    cities: action.payload,
  }))
  .handleAction(actions.setCityQuery, (state, action) => ({
    ...state,
    cityQuery: action.payload,
  }))
  .handleAction(actions.setCourts, (state, action) => ({
    ...state,
    setCourts: action.payload,
  }));

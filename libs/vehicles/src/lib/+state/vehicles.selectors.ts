import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromVehicles from './vehicles.reducer';

export const selectVehiclesState = createFeatureSelector<fromVehicles.State>(
  fromVehicles.vehiclesFeatureKey
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStarships from './starships.reducer';

export const selectStarshipsState = createFeatureSelector<fromStarships.State>(
  fromStarships.starshipsFeatureKey
);

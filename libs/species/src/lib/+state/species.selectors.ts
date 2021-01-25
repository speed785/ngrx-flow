import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSpecies from './species.reducer';

export const selectSpeciesState = createFeatureSelector<fromSpecies.State>(
  fromSpecies.speciesFeatureKey
);

import { createFeatureSelector, createSelector } from "@ngrx/store";
import {
  SPECIES_FEATURE_KEY,
  State,
  SpeciesPartialState,
  speciesAdapter,
} from "./species.reducer";

// Lookup the 'Species' feature state managed by NgRx
export const getSpeciesState = createFeatureSelector<
  SpeciesPartialState,
  State
>(SPECIES_FEATURE_KEY);
const { selectAll, selectEntities } = speciesAdapter.getSelectors();
export const getSpeciesLoaded = createSelector(
  getSpeciesState,
  (state: State) => state.loaded
);
export const getSpeciesError = createSelector(
  getSpeciesState,
  (state: State) => state.error
);
export const getAll = createSelector(getSpeciesState, (state: State) =>
  selectAll(state)
);
export const getAllSpecies = createSelector(
  getAll,
  (state) => state[0].results
);
export const getCount = createSelector(getAll, (state) => state[0].count);
export const getSpeciesEntities = createSelector(
  getSpeciesState,
  (state: State) => selectEntities(state)
);
export const getSelectedId = createSelector(
  getSpeciesState,
  (state: State) => state.selectedId
);
export const getSelected = createSelector(
  getSpeciesEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

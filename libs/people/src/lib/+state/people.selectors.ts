import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  PEOPLE_FEATURE_KEY,
  State,
  PeoplePartialState,
  peopleAdapter,
} from './people.reducer';

// Lookup the 'People' feature state managed by NgRx
export const getPeopleState = createFeatureSelector<PeoplePartialState, State>(
  PEOPLE_FEATURE_KEY
);

const { selectAll, selectEntities } = peopleAdapter.getSelectors();

export const getPeopleLoaded = createSelector(
  getPeopleState,
  (state: State) => state.loaded
);

export const getPeopleError = createSelector(
  getPeopleState,
  (state: State) => state.error
);

export const getAllPeople = createSelector(getPeopleState, (state: State) =>
  selectAll(state)
);

export const getPeopleEntities = createSelector(
  getPeopleState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getPeopleState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getPeopleEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

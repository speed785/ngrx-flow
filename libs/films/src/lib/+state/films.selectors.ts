import { createFeatureSelector, createSelector } from "@ngrx/store";
import {
  FILMS_FEATURE_KEY,
  State,
  FilmsPartialState,
  filmsAdapter,
} from "./films.reducer";
// Lookup the 'Films' feature state managed by NgRx
export const getFilmsState = createFeatureSelector<FilmsPartialState, State>(
  FILMS_FEATURE_KEY
);
const { selectAll, selectEntities } = filmsAdapter.getSelectors();
export const getFilmsLoaded = createSelector(
  getFilmsState,
  (state: State) => state.loaded
);
export const getFilmsError = createSelector(
  getFilmsState,
  (state: State) => state.error
);
export const getAll = createSelector(getFilmsState, (state: State) =>
  selectAll(state)
);
export const getAllFilms = createSelector(getAll, (state) => state[0].results);
export const getCount = createSelector(getAll, (state) => state[0].count);
export const getFilmsEntities = createSelector(getFilmsState, (state: State) =>
  selectEntities(state)
);
export const getSelectedId = createSelector(
  getFilmsState,
  (state: State) => state.selectedId
);
export const getSelected = createSelector(
  getFilmsEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

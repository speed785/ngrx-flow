import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
    PLANETS_FEATURE_KEY,
    State,
    PlanetsPartialState,
    planetsAdapter,
} from './planets.reducer';
// Lookup the 'Planets' feature state managed by NgRx
export const getPlanetsState = createFeatureSelector<PlanetsPartialState, State>(
    PLANETS_FEATURE_KEY
);
const { selectAll, selectEntities } = planetsAdapter.getSelectors();
export const getPlanetsLoaded = createSelector(
    getPlanetsState,
    (state: State) => state.loaded
);
export const getPlanetsError = createSelector(
    getPlanetsState,
    (state: State) => state.error
);
export const getAll = createSelector(getPlanetsState, (state: State) =>
    selectAll(state)
);
export const getAllPlanets = createSelector(
    getAll,
    state => state[0].results
);
export const getCount = createSelector(
    getAll,
    state => state[0].count
);
export const getPlanetsEntities = createSelector(
    getPlanetsState,
    (state: State) => selectEntities(state)
);
export const getSelectedId = createSelector(
    getPlanetsState,
    (state: State) => state.selectedId
);
export const getSelected = createSelector(
    getPlanetsEntities,
    getSelectedId,
    (entities, selectedId) => selectedId && entities[selectedId]
);
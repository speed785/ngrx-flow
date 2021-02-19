import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
    VEHICLES_FEATURE_KEY,
    State,
    VehiclesPartialState,
    vehiclesAdapter,
} from './vehicles.reducer';

// Lookup the 'Vehicles' feature state managed by NgRx
export const getVehiclesState = createFeatureSelector<VehiclesPartialState, State>(
    VEHICLES_FEATURE_KEY
);
const { selectAll, selectEntities } = vehiclesAdapter.getSelectors();
export const getVehiclesLoaded = createSelector(
    getVehiclesState,
    (state: State) => state.loaded
);
export const getVehiclesError = createSelector(
    getVehiclesState,
    (state: State) => state.error
);
export const getAll = createSelector(getVehiclesState, (state: State) =>
    selectAll(state)
);
export const getAllVehicles = createSelector(
    getAll,
    state => state[0].results
);
export const getCount = createSelector(
    getAll,
    state => state[0].count
);
export const getVehiclesEntities = createSelector(
    getVehiclesState,
    (state: State) => selectEntities(state)
);
export const getSelectedId = createSelector(
    getVehiclesState,
    (state: State) => state.selectedId
);
export const getSelected = createSelector(
    getVehiclesEntities,
    getSelectedId,
    (entities, selectedId) => selectedId && entities[selectedId]
);
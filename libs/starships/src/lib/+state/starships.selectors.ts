import { createFeatureSelector, createSelector } from "@ngrx/store";
import {
    STARSHIPS_FEATURE_KEY,
    State,
    StarshipsPartialState,
    starshipsAdapter,
} from "./starships.reducer";

// Lookup the 'Starships' feature state managed by NgRx
export const getStarshipsState = createFeatureSelector<
    StarshipsPartialState,
    State
    >(STARSHIPS_FEATURE_KEY);
const { selectAll, selectEntities } = starshipsAdapter.getSelectors();
export const getStarshipsLoaded = createSelector(
    getStarshipsState,
    (state: State) => state.loaded
);
export const getStarshipsError = createSelector(
    getStarshipsState,
    (state: State) => state.error
);
export const getAll = createSelector(getStarshipsState, (state: State) =>
    selectAll(state)
);
export const getAllStarships = createSelector(
    getAll,
    (state) => state[0].results
);
export const getCount = createSelector(getAll, (state) => state[0].count);
export const getStarshipsEntities = createSelector(
    getStarshipsState,
    (state: State) => selectEntities(state)
);
export const getSelectedId = createSelector(
    getStarshipsState,
    (state: State) => state.selectedId
);
export const getSelected = createSelector(
    getStarshipsEntities,
    getSelectedId,
    (entities, selectedId) => selectedId && entities[selectedId]
);

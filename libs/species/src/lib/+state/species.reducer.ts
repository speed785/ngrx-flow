import { Action, createReducer, on } from "@ngrx/store";
import * as SpeciesActions from "./species.actions";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { SpeciesEntity } from "./species.models";

export const SPECIES_FEATURE_KEY = "species";

export interface State extends EntityState<SpeciesEntity> {
  selectedId?: string | number; // which Species record has been selected
  loaded: boolean; // has the Species list been loaded
  error?: string | null; // last known error (if any)
}

export interface SpeciesPartialState {
  readonly [SPECIES_FEATURE_KEY]: State;
}

export const speciesAdapter: EntityAdapter<SpeciesEntity> = createEntityAdapter<
  SpeciesEntity
>();
export const initialState: State = speciesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});
const speciesReducer = createReducer(
  initialState,
  on(SpeciesActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(SpeciesActions.loadSpeciesSuccess, (state, { species }) =>
    speciesAdapter.setOne(species, { ...state, loaded: true })
  ),
  on(SpeciesActions.loadSpeciesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return speciesReducer(state, action);
}

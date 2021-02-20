import { createReducer, on, Action } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import * as PlanetsActions from "./planets.actions";
import { PlanetsEntity } from "./planets.models";
export const PLANETS_FEATURE_KEY = "planets";
export interface State extends EntityState<PlanetsEntity> {
  selectedId?: string | number; // which Planets record has been selected
  loaded: boolean; // has the Planets list been loaded
  error?: string | null; // last known error (if any)
}
export interface PlanetsPartialState {
  readonly [PLANETS_FEATURE_KEY]: State;
}
export const planetsAdapter: EntityAdapter<PlanetsEntity> = createEntityAdapter<
  PlanetsEntity
>();
export const initialState: State = planetsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});
const planetsReducer = createReducer(
  initialState,
  on(PlanetsActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(PlanetsActions.loadPlanetsSuccess, (state, { planets }) =>
    planetsAdapter.setOne(planets, { ...state, loaded: true })
  ),
  on(PlanetsActions.loadPlanetsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return planetsReducer(state, action);
}

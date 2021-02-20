import { createAction, props } from "@ngrx/store";
import { PlanetsEntity } from "./planets.models";
export const init = createAction("[Planets Page] Init");
export const loadPlanetsSuccess = createAction(
  "[Planets/API] Load Planets Success",
  props<{ planets: PlanetsEntity }>()
);
export const loadPlanetsFailure = createAction(
  "[Planets/API] Load Planets Failure",
  props<{ error: any }>()
);

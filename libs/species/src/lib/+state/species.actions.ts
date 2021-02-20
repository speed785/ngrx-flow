import { createAction, props } from "@ngrx/store";
import { SpeciesEntity } from "./species.models";

export const init = createAction("[Species Page] Init");
export const loadSpeciesSuccess = createAction(
  "[Species/API] Load Species Success",
  props<{ species: SpeciesEntity }>()
);
export const loadSpeciesFailure = createAction(
  "[Species/API] Load Species Failure",
  props<{ error: any }>()
);

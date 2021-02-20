import { createAction, props } from "@ngrx/store";
import { FilmsEntity } from "./films.models";

export const init = createAction("[Films Page] Init");
export const loadFilmsSuccess = createAction(
  "[Films/API] Load Films Success",
  props<{ films: FilmsEntity }>()
);
export const loadFilmsFailure = createAction(
  "[films/API] Load Films Failure",
  props<{ error: any }>()
);

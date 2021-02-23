import { createAction, props } from "@ngrx/store";
import {StarshipsEntity} from "./starships.models";

export const init = createAction("[Starships Page] Init");
export const loadStarshipsSuccess = createAction(
    "[Starships/API] Load Starships Success",
    props<{ starships: StarshipsEntity }>()
);
export const loadStarshipsFailure = createAction(
    "[Starships/API] Load Starships Failure",
    props<{ error: any }>()
);

import { createReducer, on, Action } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import * as StarshipsActions from "./starships.actions";
import { StarshipsEntity } from "./starships.models";

export const STARSHIPS_FEATURE_KEY = "starships";

export interface State extends EntityState<StarshipsEntity> {
    selectedId?: string | number; // which Starships record has been selected
    loaded: boolean; // has the Starships list been loaded
    error?: string | null; // last known error (if any)
}

export interface StarshipsPartialState {
    readonly [STARSHIPS_FEATURE_KEY]: State;
}

export const starshipsAdapter: EntityAdapter<StarshipsEntity> = createEntityAdapter<
    StarshipsEntity
    >();
export const initialState: State = starshipsAdapter.getInitialState({
    // set initial required properties
    loaded: false,
});
const starshipsReducer = createReducer(
    initialState,
    on(StarshipsActions.init, (state) => ({
        ...state,
        loaded: false,
        error: null,
    })),
    on(StarshipsActions.loadStarshipsSuccess, (state, { starships }) =>
        starshipsAdapter.setOne(starships, { ...state, loaded: true })
    ),
    on(StarshipsActions.loadStarshipsFailure, (state, { error }) => ({
        ...state,
        error,
    }))
);

export function reducer(state: State | undefined, action: Action) {
    return starshipsReducer(state, action);
}

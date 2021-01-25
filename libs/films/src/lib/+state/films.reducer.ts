import { Action, createReducer, on } from '@ngrx/store';
import * as FilmsActions from './films.actions';
import { FilmsEntity } from './films.models';
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
export const FILMS_FEATURE_KEY = 'films';
export interface State extends EntityState<FilmsEntity> {
    selectedId?: string | number; // which Films record has been selected
    loaded: boolean; // has the Films list been loaded
    error?: string | null; // last known error (if any)
}
export interface FilmsPartialState {
    readonly [FILMS_FEATURE_KEY]: State;
}
export const filmsAdapter: EntityAdapter<FilmsEntity> = createEntityAdapter<
    FilmsEntity
    >();
export const initialState: State = filmsAdapter.getInitialState({
    // set initial required properties
    loaded: false,
});
const filmsReducer = createReducer(
    initialState,
    on(FilmsActions.init, (state) => ({ ...state, loaded: false, error: null })),
    on(FilmsActions.loadFilmsSuccess, (state, { films }) =>
        filmsAdapter.setOne(films, { ...state, loaded: true })
    ),
    on(FilmsActions.loadFilmsFailure, (state, { error }) => ({
        ...state,
        error,
    }))
);

export function reducer(state: State | undefined, action: Action) {
    return filmsReducer(state, action);
}

import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as PeopleActions from './people.actions';
import { PeopleEntity } from './people.models';

export const PEOPLE_FEATURE_KEY = 'people';

export interface State extends EntityState<PeopleEntity> {
  selectedId?: string | number; // which People record has been selected
  loaded: boolean; // has the People list been loaded
  error?: string | null; // last known error (if any)
}

export interface PeoplePartialState {
  readonly [PEOPLE_FEATURE_KEY]: State;
}

export const peopleAdapter: EntityAdapter<PeopleEntity> = createEntityAdapter<
  PeopleEntity
>();

export const initialState: State = peopleAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const peopleReducer = createReducer(
  initialState,
  on(PeopleActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(PeopleActions.loadPeopleSuccess, (state, { people }) =>
    peopleAdapter.setAll(people, { ...state, loaded: true })
  ),
  on(PeopleActions.loadPeopleFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return peopleReducer(state, action);
}

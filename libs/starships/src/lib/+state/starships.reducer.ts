import { Action, createReducer, on } from '@ngrx/store';
import * as StarshipsActions from './starships.actions';

export const starshipsFeatureKey = 'starships';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(StarshipsActions.loadStarshipss, state => state),

);


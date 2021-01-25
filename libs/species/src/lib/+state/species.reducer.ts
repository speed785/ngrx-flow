import { Action, createReducer, on } from '@ngrx/store';
import * as SpeciesActions from './species.actions';

export const speciesFeatureKey = 'species';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(SpeciesActions.loadSpeciess, state => state),

);


import { Action, createReducer, on } from '@ngrx/store';
import * as VehiclesActions from './vehicles.actions';

export const vehiclesFeatureKey = 'vehicles';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(VehiclesActions.loadVehicless, state => state),

);


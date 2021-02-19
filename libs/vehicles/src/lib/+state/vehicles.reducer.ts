import {createReducer, on, Action} from '@ngrx/store';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import * as VehiclesActions from './vehicles.actions';
import {VehiclesEntity} from './vehicles.models';

export const VEHICLES_FEATURE_KEY = 'vehicles';

export interface State extends EntityState<VehiclesEntity> {
    selectedId?: string | number; // which Vehicles record has been selected
    loaded: boolean; // has the Vehicles list been loaded
    error?: string | null; // last known error (if any)
}

export interface VehiclesPartialState {
    readonly [VEHICLES_FEATURE_KEY]: State;
}

export const vehiclesAdapter: EntityAdapter<VehiclesEntity> = createEntityAdapter<VehiclesEntity>();
export const initialState: State = vehiclesAdapter.getInitialState({
    // set initial required properties
    loaded: false,
});
const vehiclesReducer = createReducer(
    initialState,
    on(VehiclesActions.init, (state) => ({...state, loaded: false, error: null})),
    on(VehiclesActions.loadVehiclesSuccess, (state, {vehicles}) =>
        vehiclesAdapter.setOne(vehicles, {...state, loaded: true})
    ),
    on(VehiclesActions.loadVehiclesFailure, (state, {error}) => ({
        ...state,
        error,
    }))
);

export function reducer(state: State | undefined, action: Action) {
    return vehiclesReducer(state, action);
}

import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import * as VehiclesActions from "./vehicles.actions";
import * as VehiclesSelectors from "./vehicles.selectors";

@Injectable()
export class VehiclesFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(VehiclesSelectors.getVehiclesLoaded));
  allVehicles$ = this.store.pipe(select(VehiclesSelectors.getAllVehicles));
  count$ = this.store.pipe(select(VehiclesSelectors.getCount));
  selectedVehicles$ = this.store.pipe(select(VehiclesSelectors.getSelected));
  constructor(private store: Store) {}
  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(VehiclesActions.init());
  }
}

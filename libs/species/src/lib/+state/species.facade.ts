import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import * as SpeciesActions from "./species.actions";
import * as SpeciesSelectors from "./species.selectors";

@Injectable()
export class SpeciesFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(SpeciesSelectors.getSpeciesLoaded));
  allSpecies$ = this.store.pipe(select(SpeciesSelectors.getAllSpecies));
  count$ = this.store.pipe(select(SpeciesSelectors.getCount));
  selectedSpecies$ = this.store.pipe(select(SpeciesSelectors.getSelected));
  constructor(private store: Store) {}
  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(SpeciesActions.init());
  }
}

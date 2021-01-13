import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as PlanetsActions from './planets.actions';
import * as PlanetsSelectors from './planets.selectors';
@Injectable()
export class PlanetsFacade {
    /**
     * Combine pieces of state using createSelector,
     * and expose them as observables through the facade.
     */
    loaded$ = this.store.pipe(select(PlanetsSelectors.getPlanetsLoaded));
    allPlanets$ = this.store.pipe(select(PlanetsSelectors.getAllPlanets));
    count$ = this.store.pipe(select(PlanetsSelectors.getCount));
    selectedPlanets$ = this.store.pipe(select(PlanetsSelectors.getSelected));
    constructor(private store: Store) {}
    /**
     * Use the initialization action to perform one
     * or more tasks in your Effects.
     */
    init() {
        this.store.dispatch(PlanetsActions.init());
    }
}

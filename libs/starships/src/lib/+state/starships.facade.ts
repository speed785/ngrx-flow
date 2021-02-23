import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import * as StarshipsActions from "./starships.actions";
import * as StarshipsSelectors from "./starships.selectors";

@Injectable()
export class StarshipsFacade {
    /**
     * Combine pieces of state using createSelector,
     * and expose them as observables through the facade.
     */
    loaded$ = this.store.pipe(select(StarshipsSelectors.getStarshipsLoaded));
    allStarships$ = this.store.pipe(select(StarshipsSelectors.getAllStarships));
    count$ = this.store.pipe(select(StarshipsSelectors.getCount));
    selectedStarships$ = this.store.pipe(select(StarshipsSelectors.getSelected));
    constructor(private store: Store) {}
    /**
     * Use the initialization action to perform one
     * or more tasks in your Effects.
     */
    init() {
        this.store.dispatch(StarshipsActions.init());
    }
}

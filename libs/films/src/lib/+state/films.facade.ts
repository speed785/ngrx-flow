import {Injectable} from "@angular/core";
import {select, Store} from "@ngrx/store";
import * as FilmsActions from './films.actions';
import * as FilmsSelectors from './films.selectors';
@Injectable()
export class FilmsFacade {
    /**
     * Combine pieces of state using createSelector,
     * and expose them as observables through the facade.
     */
    loaded$ = this.store.pipe(select(FilmsSelectors.getFilmsLoaded));
    allFilms$ = this.store.pipe(select(FilmsSelectors.getAllFilms));
    count$ = this.store.pipe(select(FilmsSelectors.getCount));
    selectedFilms$ = this.store.pipe(select(FilmsSelectors.getSelected));
    constructor(private store: Store) {}
    /**
     * Use the initialization action to perform one
     * or more tasks in your Effects.
     */
    init() {
        this.store.dispatch(FilmsActions.init());
    }
}

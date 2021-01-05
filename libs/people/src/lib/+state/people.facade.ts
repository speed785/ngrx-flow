import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as PeopleActions from './people.actions';
import * as PeopleFeature from './people.reducer';
import * as PeopleSelectors from './people.selectors';

@Injectable()
export class PeopleFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(PeopleSelectors.getPeopleLoaded));
  allPeople$ = this.store.pipe(select(PeopleSelectors.getAllPeople));
  selectedPeople$ = this.store.pipe(select(PeopleSelectors.getSelected));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(PeopleActions.init());
  }
}

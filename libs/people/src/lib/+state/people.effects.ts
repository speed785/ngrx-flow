import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as PeopleFeature from './people.reducer';
import * as PeopleActions from './people.actions';

@Injectable()
export class PeopleEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return PeopleActions.loadPeopleSuccess({ people: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return PeopleActions.loadPeopleFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}

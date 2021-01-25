import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as SpeciesActions from './species.actions';


@Injectable()
export class SpeciesEffects {


  loadSpeciess$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(SpeciesActions.loadSpeciess),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY)
    );
  });


  constructor(private actions$: Actions) {}

}

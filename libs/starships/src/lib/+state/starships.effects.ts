import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { concatMap } from "rxjs/operators";
import { EMPTY } from "rxjs";

import * as StarshipsActions from "./starships.actions";

@Injectable()
export class StarshipsEffects {
  loadStarshipss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StarshipsActions.loadStarshipss),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY)
    );
  });

  constructor(private actions$: Actions) {}
}

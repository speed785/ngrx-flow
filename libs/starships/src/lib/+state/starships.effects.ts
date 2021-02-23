import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, delay, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { SwapiService } from "@ngrx-flow/shared/services";
import * as uuid from "uuid";
import * as StarshipsActions from "./starships.actions";
import { StarshipsEntity } from "./starships.models";

@Injectable()
export class StarshipsEffects {
  init$ = createEffect(() =>
      this.actions$.pipe(
          ofType(StarshipsActions.init),
          mergeMap(() => this.swapiService.getStarships()),
          map((starshipsResults: StarshipsEntity) => {
            starshipsResults.id = uuid.v4();
            starshipsResults.results.map((result) => {
              result.id = uuid.v4();
              return result;
            });
            return StarshipsActions.loadStarshipsSuccess({
              starships: starshipsResults,
            });
          }),
          delay(1000),
          catchError((err) =>
              of(StarshipsActions.loadStarshipsFailure({ error: new Error(err) }))
          )
      )
  );
  constructor(private actions$: Actions, private swapiService: SwapiService) {}
}

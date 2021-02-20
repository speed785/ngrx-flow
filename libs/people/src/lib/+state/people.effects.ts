import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as PeopleActions from "./people.actions";
import { catchError, delay, map, mergeMap } from "rxjs/operators";
import { SwapiService } from "@ngrx-flow/shared/services";
import { of } from "rxjs";
import * as uuid from "uuid";
import { PeopleEntity } from "@ngrx-flow/people";
@Injectable()
export class PeopleEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleActions.init),
      mergeMap(() => this.swapiService.get()),
      map((peopleResults: PeopleEntity) => {
        peopleResults.id = uuid.v4();
        peopleResults.results.map((result) => {
          result.id = uuid.v4();
          return result;
        });
        return PeopleActions.loadPeopleSuccess({ people: peopleResults });
      }),
      delay(1000),
      catchError((err) =>
        of(PeopleActions.loadPeopleFailure({ error: new Error(err) }))
      )
    )
  );
  constructor(private actions$: Actions, private swapiService: SwapiService) {}
}

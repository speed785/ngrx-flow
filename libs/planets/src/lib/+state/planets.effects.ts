import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as PlanetsActions from "./planets.actions";
import { catchError, delay, map, mergeMap } from "rxjs/operators";
import { SwapiService } from "@ngrx-flow/shared/services";
import { of } from "rxjs";
import * as uuid from "uuid";
import { PlanetsEntity } from "../+state/planets.models";
@Injectable()
export class PlanetsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PlanetsActions.init),
      mergeMap(() => this.swapiService.getPlanets()),
      map((planetsResults: PlanetsEntity) => {
        planetsResults.id = uuid.v4();
        planetsResults.results.map((result) => {
          result.id = uuid.v4();
          return result;
        });
        return PlanetsActions.loadPlanetsSuccess({
            planets: planetsResults
        });
      }),
      delay(1000),
      catchError((err) =>
        of(PlanetsActions.loadPlanetsFailure({ error: new Error(err) }))
      )
    )
  );
  constructor(private actions$: Actions, private swapiService: SwapiService) {}
}

import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as FilmsActions from "./films.actions";
import {catchError, delay, flatMap, map} from "rxjs/operators";
import { of } from 'rxjs';
import * as uuid from 'uuid';
import {SwapiService} from "@ngrx-flow/shared/services";
import {FilmsEntity} from "./films.models";

@Injectable()
export class FilmsEffects {
  init$ = createEffect(() =>
      this.actions$.pipe(
          ofType(FilmsActions.init),
          flatMap(() => this.swapiService.get()),
          map((filmsResults: FilmsEntity) => {
            filmsResults.id = uuid.v4();
            filmsResults.results.map(result => {
              result.id = uuid.v4();
              return result;
            })
            return FilmsActions.loadFilmsSuccess({ films: filmsResults })
          }),
          delay(1000),
          catchError((err) => of(FilmsActions.loadFilmsFailure({error: new Error(err)})))
      )
  );
  constructor(
      private actions$: Actions,
      private swapiService: SwapiService
  ) {}
}

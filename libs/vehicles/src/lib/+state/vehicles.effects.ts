import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, delay, map, mergeMap } from "rxjs/operators";
import { of } from "rxjs";
import { SwapiService } from "@ngrx-flow/shared/services";
import * as uuid from "uuid";
import * as VehiclesActions from "./vehicles.actions";
import { VehiclesEntity } from "./vehicles.models";

@Injectable()
export class VehiclesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VehiclesActions.init),
      mergeMap(() => this.swapiService.getVehicles()),
      map((vehiclesResults: VehiclesEntity) => {
        vehiclesResults.id = uuid.v4();
        vehiclesResults.results.map((result) => {
          result.id = uuid.v4();
          return result;
        });
        return VehiclesActions.loadVehiclesSuccess({
          vehicles: vehiclesResults,
        });
      }),
      delay(1000),
      catchError((err) =>
        of(VehiclesActions.loadVehiclesFailure({ error: new Error(err) }))
      )
    )
  );
  constructor(private actions$: Actions, private swapiService: SwapiService) {}
}

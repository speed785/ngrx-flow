import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as SpeciesActions from "./species.actions";
import { catchError, delay, map, mergeMap } from "rxjs/operators";
import { SwapiService } from "@ngrx-flow/shared/services";
import { of } from "rxjs";
import * as uuid from "uuid";
import { SpeciesEntity } from "../+state/species.models";
@Injectable()
export class SpeciesEffects {
    init$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SpeciesActions.init),
            mergeMap(() => this.swapiService.getSpecies()),
            map((speciesResults: SpeciesEntity) => {
                speciesResults.id = uuid.v4();
                speciesResults.results.map((result) => {
                    result.id = uuid.v4();
                    return result;
                });
                return SpeciesActions.loadSpeciesSuccess({
                    species: speciesResults
                });
            }),
            delay(1000),
            catchError((err) =>
                of(SpeciesActions.loadSpeciesFailure({ error: new Error(err) }))
            )
        )
    );
    constructor(private actions$: Actions, private swapiService: SwapiService) {}
}

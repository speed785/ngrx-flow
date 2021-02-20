import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpeciesComponent } from "./component/species/species.component";
import { Route, RouterModule } from "@angular/router";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { NzCardModule } from "ng-zorro-antd/card";
import { SpeciesEffects } from "./+state/species.effects";
import * as fromSpecies from "./+state/species.reducer";
import {SpeciesFacade} from "./+state/species.facade";

export const speciesRoutes: Route[] = [
  {
    path: "",
    component: SpeciesComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    NzGridModule,
    NzSkeletonModule,
    NzSpaceModule,
    RouterModule.forChild(speciesRoutes),
    StoreModule.forFeature(
        fromSpecies.SPECIES_FEATURE_KEY,
        fromSpecies.reducer
    ),
    EffectsModule.forFeature([SpeciesEffects]),
    NzCardModule,
  ],
  declarations: [SpeciesComponent],
  providers: [SpeciesFacade]
})
export class SpeciesModule {}

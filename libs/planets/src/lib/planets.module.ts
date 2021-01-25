import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";
import { PlanetsComponent } from "./component/planets/planets.component";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzSkeletonModule } from "ng-zorro-antd/skeleton";
import {NzCardModule} from "ng-zorro-antd/card";
import {PlanetsFacade} from "./+state/planets.facade";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {PlanetsEffects} from "./+state/planets.effects";
import * as fromPlanets from "./+state/planets.reducer";
import {NzSpaceModule} from "ng-zorro-antd/space";
export const planetsRoutes: Route[] = [
  {
    path: "",
    component: PlanetsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    NzGridModule,
    NzSkeletonModule,
    NzSpaceModule,
    RouterModule.forChild(planetsRoutes),
    StoreModule.forFeature(fromPlanets.PLANETS_FEATURE_KEY, fromPlanets.reducer),
    EffectsModule.forFeature([PlanetsEffects]),
    NzCardModule,
  ],
  declarations: [PlanetsComponent],
  providers: [PlanetsFacade],
})
export class PlanetsModule {}

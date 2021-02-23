import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StarshipsComponent } from "./component/starships/starships.component";
import { SharedServicesModule } from "@ngrx-flow/shared/services";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { Route, RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { StarshipsEffects } from "./+state/starships.effects";
import { EffectsModule } from "@ngrx/effects";
import { NzCardModule } from "ng-zorro-antd/card";
import * as fromStarships from "./+state/starships.reducer";
import { StarshipsFacade } from "./+state/starships.facade";

export const starshipsRoutes: Route[] = [
  {
    path: "",
    component: StarshipsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedServicesModule,
    NzSpaceModule,
    NzGridModule,
    NzSkeletonModule,
    RouterModule.forChild(starshipsRoutes),
    StoreModule.forFeature(
        fromStarships.STARSHIPS_FEATURE_KEY,
        fromStarships.reducer
    ),
    EffectsModule.forFeature([StarshipsEffects]),
    NzCardModule,
  ],
  declarations: [StarshipsComponent],
  providers: [StarshipsFacade],
})
export class StarshipsModule {}

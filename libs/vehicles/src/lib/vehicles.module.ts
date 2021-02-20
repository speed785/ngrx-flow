import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VehiclesComponent } from "./component/vehicles/vehicles.component";
import { SharedServicesModule } from "@ngrx-flow/shared/services";
import { NzSpaceModule } from "ng-zorro-antd/space";
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { Route, RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { VehiclesEffects } from "./+state/vehicles.effects";
import { EffectsModule } from "@ngrx/effects";
import { NzCardModule } from "ng-zorro-antd/card";
import * as fromVehicles from "./+state/vehicles.reducer";
import { VehiclesFacade } from "./+state/vehicles.facade";

export const vehiclesRoutes: Route[] = [
  {
    path: "",
    component: VehiclesComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedServicesModule,
    NzSpaceModule,
    NzGridModule,
    NzSkeletonModule,
    RouterModule.forChild(vehiclesRoutes),
    StoreModule.forFeature(
      fromVehicles.VEHICLES_FEATURE_KEY,
      fromVehicles.reducer
    ),
    EffectsModule.forFeature([VehiclesEffects]),
    NzCardModule,
  ],
  declarations: [VehiclesComponent],
  providers: [VehiclesFacade],
})
export class VehiclesModule {}

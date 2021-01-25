import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilmsComponent } from './component/films/films.component';
import {Route, RouterModule} from "@angular/router";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {NzCardModule} from "ng-zorro-antd/card";
import * as fromFilms from "./+state/films.reducer";
import { FilmsEffects } from "./+state/films.effects";
import { FilmsFacade } from "./+state/films.facade";
import { SharedServicesModule } from "@ngrx-flow/shared/services";
import { NzSpaceModule } from "ng-zorro-antd/space";

export const filmsRoutes: Route[] = [
  {
    path: "",
    component: FilmsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    NzGridModule,
    SharedServicesModule,
    NzSpaceModule,
    NzSkeletonModule,
    RouterModule.forChild(filmsRoutes),
    StoreModule.forFeature(fromFilms.FILMS_FEATURE_KEY, fromFilms.reducer),
    EffectsModule.forFeature([FilmsEffects]),
    NzCardModule,
  ],
  declarations: [FilmsComponent],
  providers: [FilmsFacade],
})
export class FilmsModule {}

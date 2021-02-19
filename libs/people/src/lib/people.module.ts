import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Route, RouterModule} from "@angular/router";
import {PeopleComponent} from "./component/people/people.component";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import * as fromPeople from "./+state/people.reducer";
import {PeopleEffects} from "./+state/people.effects";
import {PeopleFacade} from "./+state/people.facade";
import {NzCardModule} from "ng-zorro-antd/card";
import {SharedServicesModule} from "@ngrx-flow/shared/services";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";

export const peopleRoutes: Route[] = [
    {
        path: "",
        component: PeopleComponent,
    },
];

@NgModule({
    imports: [
        CommonModule,
        SharedServicesModule,
        NzSpaceModule,
        NzGridModule,
        NzSkeletonModule,
        RouterModule.forChild(peopleRoutes),
        StoreModule.forFeature(fromPeople.PEOPLE_FEATURE_KEY, fromPeople.reducer),
        EffectsModule.forFeature([PeopleEffects]),
        NzCardModule,
    ],
    declarations: [PeopleComponent],
    providers: [PeopleFacade],
})
export class PeopleModule {
}

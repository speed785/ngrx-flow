import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './component/people/people.component';
import { PeopleRoutingModule } from './people-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPeople from './+state/people.reducer';
import { PeopleEffects } from './+state/people.effects';
import { PeopleFacade } from './+state/people.facade';

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule,
    StoreModule.forFeature(fromPeople.PEOPLE_FEATURE_KEY, fromPeople.reducer),
    EffectsModule.forFeature([PeopleEffects]),
  ],
  declarations: [PeopleComponent],
  providers: [PeopleFacade],
})
export class PeopleModule {}

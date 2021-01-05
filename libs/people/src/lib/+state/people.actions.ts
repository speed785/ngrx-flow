import { createAction, props } from '@ngrx/store';
import { PeopleEntity } from './people.models';

export const init = createAction('[People Page] Init');

export const loadPeopleSuccess = createAction(
  '[People/API] Load People Success',
  props<{ people: PeopleEntity[] }>()
);

export const loadPeopleFailure = createAction(
  '[People/API] Load People Failure',
  props<{ error: any }>()
);

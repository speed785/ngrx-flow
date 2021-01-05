import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PeopleEntity } from '../../+state/people.models';
import { Store } from '@ngrx/store';

import * as PeopleActions from '../../+state/people.actions';
import { PeopleFacade } from '../../+state/people.facade';

@Component({
  selector: 'ngrx-flow-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleComponent implements OnInit {

  constructor(
    private store: Store<PeopleEntity>,
    public peopleFacade: PeopleFacade
    ) { }

  ngOnInit(): void {
    this.store.dispatch(PeopleActions.loadPeopleSuccess({people: [{id:'1234'}]}))

  }

}

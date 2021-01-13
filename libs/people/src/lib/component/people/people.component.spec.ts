import { PeopleComponent } from './people.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { PeopleFacade } from '@ngrx-flow/people';

describe('PeopleComponent', () => {
  let spectator: Spectator<PeopleComponent>;
  const createComponent = createComponentFactory({
    component: PeopleComponent,
    mocks: [PeopleFacade],
    shallow: true
  })

  beforeEach(() => spectator = createComponent())

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });
});

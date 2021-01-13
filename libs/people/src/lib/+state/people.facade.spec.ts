import { Store, StoreModule } from '@ngrx/store';

import { PeopleEntity } from './people.models';
import { PeopleFacade } from './people.facade';
import { State } from './people.reducer';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

// interface TestSchema {
//   people: State;
// }

describe('PeopleFacade', () => {
  let facade: SpectatorService<PeopleFacade>;
  // let store: Store<TestSchema>;
  const createService = createServiceFactory({
    service: PeopleFacade,
    imports: [
      StoreModule.forRoot([])
    ]
  });
  const createPeopleEntity = (
      id: string,
      count = 0,
      previous = '',
      next = '',
      results = []
  ) =>
      ({
        id,
        count,
        previous,
        next,
        results
      } as PeopleEntity);

  beforeEach(() => facade = createService())

  it('exists', () => {
    expect(facade.service).toBeDefined();
  })
});

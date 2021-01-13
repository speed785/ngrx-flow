import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { PeopleEffects } from './people.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { Action } from '@ngrx/store';
import { SwapiService } from '@ngrx-flow/shared/services';
import { hot } from '@nrwl/angular/testing';

describe('PeopleEffects', () => {
  let effects: SpectatorService<PeopleEffects>;
  let actions$: Observable<Action>;

  const createService = createServiceFactory({
    service: PeopleEffects,
    imports: [HttpClientTestingModule],
    providers: [

      provideMockActions(() => actions$),
      provideMockStore({
        selectors: []
      })
    ],
    mocks: [SwapiService]
  });

  beforeEach(() => effects = createService())

  it('exists', () => {
    expect(effects.service).toBeDefined();
  });

  it('should', () => {

    actions$ = hot('-a--', {
      a: { type: '[Customers Page] Search Customers', name: 'Bob' },
    });

    // there is no output, because Bob is already in the Store state
    const expected = hot('-');

    expect(effects.service.init$).toBeObservable(expected);

  })
});

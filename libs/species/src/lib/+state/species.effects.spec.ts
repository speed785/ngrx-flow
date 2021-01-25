import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SpeciesEffects } from './species.effects';

describe('SpeciesEffects', () => {
  let actions$: Observable<any>;
  let effects: SpeciesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SpeciesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SpeciesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

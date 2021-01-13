import { PeopleEntity } from './people.models';
import * as PeopleActions from './people.actions';
import { State, initialState, reducer } from './people.reducer';

describe('People Reducer', () => {
  const createPeopleEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as PeopleEntity);

  beforeEach(() => {});

  describe('valid People actions', () => {
    it('loadPeopleSuccess should return set the list of known People', () => {
      const people = [
        createPeopleEntity('PRODUCT-AAA'),
        createPeopleEntity('PRODUCT-zzz'),
      ];
      const action = PeopleActions.loadPeopleSuccess({ people });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(1);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});

import { PeopleEntity } from './people.models';
import { State, peopleAdapter, initialState } from './people.reducer';
import * as PeopleSelectors from './people.selectors';

describe('People Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getPeopleId = (it) => it['id'];
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

  let state;

  beforeEach(() => {
    state = {
      people: peopleAdapter.setOne(
          createPeopleEntity('foo', 3, 'bar', 'baz', []),
          {
            ...initialState,
            selectedId: 'foo',
            error: ERROR_MSG,
            loaded: true,
          }
      ),
    };
  });

  describe('People Selectors', () => {
    it('getAllPeople() should return the list of People', () => {
      const results = PeopleSelectors.getAllPeople(state);
      const selId = getPeopleId(results);

      expect(results.length).toBe(0);
      expect(selId).toBeUndefined();
    });

    it('getSelected() should return the selected Entity', () => {
      const result = PeopleSelectors.getSelected(state);
      const selId = getPeopleId(result);

      expect(selId).toBe('foo');
    });

    it("getPeopleLoaded() should return the current 'loaded' status", () => {
      const result = PeopleSelectors.getPeopleLoaded(state);

      expect(result).toBe(true);
    });

    it("getPeopleError() should return the current 'error' state", () => {
      const result = PeopleSelectors.getPeopleError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});

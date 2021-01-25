import * as fromFilms from './films.actions';

describe('loadFilmss', () => {
  it('should return an action', () => {
    expect(fromFilms.loadFilmss().type).toBe('[Films] Load Filmss');
  });
});

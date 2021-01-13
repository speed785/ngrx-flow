import * as fromPlanets from './planets.actions';

describe('loadPlanetss', () => {
  it('should return an action', () => {
    expect(fromPlanets.loadPlanetss().type).toBe('[Planets] Load Planetss');
  });
});

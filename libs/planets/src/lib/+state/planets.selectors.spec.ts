import * as fromPlanets from './planets.reducer';
import { selectPlanetsState } from './planets.selectors';

describe('Planets Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPlanetsState({
      [fromPlanets.planetsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});

import * as fromSpecies from "./species.reducer";
import { selectSpeciesState } from "./species.selectors";

describe("Species Selectors", () => {
  it("should select the feature state", () => {
    const result = selectSpeciesState({
      [fromSpecies.speciesFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});

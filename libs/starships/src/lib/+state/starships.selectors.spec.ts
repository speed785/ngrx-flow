import * as fromStarships from "./starships.reducer";
import { selectStarshipsState } from "./starships.selectors";

describe("Starships Selectors", () => {
  it("should select the feature state", () => {
    const result = selectStarshipsState({
      [fromStarships.starshipsFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});

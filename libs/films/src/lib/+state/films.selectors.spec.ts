import * as fromFilms from "./films.reducer";
import { selectFilmsState } from "./films.selectors";

describe("Films Selectors", () => {
  it("should select the feature state", () => {
    const result = selectFilmsState({
      [fromFilms.filmsFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});

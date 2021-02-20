import * as fromVehicles from "./vehicles.reducer";
import { selectVehiclesState } from "./vehicles.selectors";

describe("Vehicles Selectors", () => {
  it("should select the feature state", () => {
    const result = selectVehiclesState({
      [fromVehicles.vehiclesFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});

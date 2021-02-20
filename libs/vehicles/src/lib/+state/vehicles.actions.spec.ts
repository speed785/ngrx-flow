import * as fromVehicles from "./vehicles.actions";

describe("loadVehicless", () => {
  it("should return an action", () => {
    expect(fromVehicles.loadVehicless().type).toBe("[Vehicles] Load Vehicless");
  });
});

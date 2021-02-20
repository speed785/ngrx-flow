import * as fromSpecies from "./species.actions";

describe("loadSpeciess", () => {
  it("should return an action", () => {
    expect(fromSpecies.loadSpeciess().type).toBe("[Species] Load Speciess");
  });
});

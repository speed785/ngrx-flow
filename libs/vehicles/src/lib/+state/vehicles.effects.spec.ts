import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { Observable } from "rxjs";

import { VehiclesEffects } from "./vehicles.effects";

describe("VehiclesEffects", () => {
  let actions$: Observable<any>;
  let effects: VehiclesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiclesEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(VehiclesEffects);
  });

  it("should be created", () => {
    expect(effects).toBeTruthy();
  });
});

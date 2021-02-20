import { SwapiService } from "./swapi.service";
import { createServiceFactory, SpectatorService } from "@ngneat/spectator";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { waitForAsync } from "@angular/core/testing";
import * as https from "https";
describe("SwapiService", () => {
  let spectator: SpectatorService<SwapiService>;
  let httpMock: HttpTestingController;
  const mockPeople = {
    count: 3,
    id: "foo",
    next: "bar",
    previous: "baz",
    results: [
      {
        gender: "male",
        eye_color: "blue",
        birth_year: "yesterday",
        created: "yesterday",
        edited: "true",
        films: ["foo", "bar"],
        id: "m",
        name: "fred",
      },
      {
        gender: "male",
        eye_color: "green",
        birth_year: "today",
        created: "yesterday",
        edited: "true",
        films: ["foo", "bar"],
        id: "m",
        name: "ted",
      },
      {
        gender: "male",
        eye_color: "blue",
        birth_year: "yesterday",
        created: "yesterday",
        edited: "true",
        films: ["foo", "bar"],
        id: "m",
        name: "barney",
      },
    ],
  };
  const createService = createServiceFactory({
    service: SwapiService,
    imports: [HttpClientTestingModule],
  });
  beforeEach(() => (spectator = createService()));
  beforeEach(() => (httpMock = spectator.inject(HttpTestingController)));
  afterEach(() => httpMock.verify());
  it("should exist", () => {
    expect(spectator.service).toBeDefined();
  });
  it(
    "gets people",
    waitForAsync(() => {
      spectator.service.get().subscribe((people) => {
        expect(people).toEqual(mockPeople);
      });
      const request = httpMock.expectOne("https://swapi.dev/api/people");
      expect(request.request.method).toBe("GET");
      expect(request.request.url).toBe("https://swapi.dev/api/people");
      request.flush(mockPeople);
    })
  );
});

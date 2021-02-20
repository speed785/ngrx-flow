import { PeopleComponent } from "./people.component";
import { byTestId, createComponentFactory, Spectator } from "@ngneat/spectator";
import { PeopleFacade } from "@ngrx-flow/people";
import { NzCardModule } from "ng-zorro-antd/card";
import { NzSkeletonModule } from "ng-zorro-antd/skeleton";
import { NzGridModule } from "ng-zorro-antd/grid";
import { of } from "rxjs";

describe("PeopleComponent", () => {
  let spectator: Spectator<PeopleComponent>;
  const createComponent = createComponentFactory({
    component: PeopleComponent,
    imports: [NzCardModule, NzSkeletonModule, NzGridModule],
    mocks: [PeopleFacade],
  });

  beforeEach(() => (spectator = createComponent({})));

  it("exists", () => {
    expect(spectator.component).toBeDefined();
  });

  // it('has a name', () => {
  //   const el = spectator.query(byTestId('testEyeColor'));
  //   expect(el.textContent).toContain('foo');
  // });
});

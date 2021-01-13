import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {PlanetsFacade} from "../../+state/planets.facade";

@Component({
  selector: "ngrx-flow-starships",
  templateUrl: "./planets.component.html",
  styleUrls: ["./planets.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PlanetsComponent implements OnInit {
  constructor(
      public planetsFacade: PlanetsFacade
  ) {}

  ngOnInit(): void {
    this.planetsFacade.init();
}

}

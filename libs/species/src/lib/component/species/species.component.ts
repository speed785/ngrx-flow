import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { SpeciesFacade } from "../../+state/species.facade";

@Component({
  selector: "ngrx-flow-species",
  templateUrl: "./species.component.html",
  styleUrls: ["./species.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeciesComponent implements OnInit {
  constructor(public speciesFacade: SpeciesFacade) {}

  ngOnInit(): void {
    this.speciesFacade.init();
  }
}

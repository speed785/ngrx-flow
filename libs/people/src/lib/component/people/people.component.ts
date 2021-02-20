import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { PeopleFacade } from "../../+state/people.facade";

@Component({
  selector: "ngrx-flow-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeopleComponent implements OnInit {
  constructor(public peopleFacade: PeopleFacade) {}

  ngOnInit(): void {
    this.peopleFacade.init();
  }
}

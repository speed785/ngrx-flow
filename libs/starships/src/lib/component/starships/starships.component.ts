import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { StarshipsFacade } from "../../+state/starships.facade";

@Component({
  selector: "ngrx-flow-starships",
  templateUrl: "./starships.component.html",
  styleUrls: ["./starships.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarshipsComponent implements OnInit {
  constructor(public starshipsFacade: StarshipsFacade) {}

  ngOnInit(): void {
    this.starshipsFacade.init();
  }
}

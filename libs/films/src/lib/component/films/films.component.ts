import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FilmsFacade } from "../../+state/films.facade";

@Component({
  selector: "ngrx-flow-films",
  templateUrl: "./films.component.html",
  styleUrls: ["./films.component.scss"],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FilmsComponent implements OnInit {
  constructor(public filmsFacade: FilmsFacade) {}

  ngOnInit(): void {
    this.filmsFacade.init();
  }
}

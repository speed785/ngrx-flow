import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Message } from "@ngrx-flow/api-interfaces";

@Component({
  selector: "ngrx-flow-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  isCollapsed = true;
  hello$ = this.http.get<Message>("https://swapi.dev/api/people/1/");
  constructor(private http: HttpClient) {}
}

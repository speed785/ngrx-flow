import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SwapiService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get("https://swapi.dev/api/people");
  }
  getPlanets() {
    return this.http.get("https://swapi.dev/api/planets");
  }
  getFilms() {
    return this.http.get("https://swapi.dev/api/films");
  }
  getSpecies() {
    return this.http.get("https://swapi.dev/api/species");
  }
  getVehicles() {
    return this.http.get("https://swapi.dev/api/vehicles");
  }
  getStarships() {
    return this.http.get("https://swapi.dev/api/starships");
  }
}

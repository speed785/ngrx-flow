/**
 * Interface for the 'People' data
 */
export interface PeopleEntity {
  id: string; // Primary ID
  count: number;
  next: string;
  previous: string;
  results: Person[];
}

export interface Person {
  id: string | number;
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  hair_color: string;
  skin_color: string;
  species: [];
  films: string[];
  gender: string;
  name: string;
  homeworld: string[];
  filmtest: Movie[];
}

export interface Movie {

  id: string | number;

  title: string;

}
// birth_year: "19BBY"
// created: "2014-12-09T13:50:51.644000Z"
// edited: "2014-12-20T21:17:56.891000Z"
// eye_color: "blue"
// films: (4) ["http://swapi.dev/api/films/1/", "http://swapi.dev/api/films/2/", "http://swapi.dev/api/films/3/", "http://swapi.dev/api/films/6/"]
// gender: "male"
// hair_color: "blond"
// height: "172"
// homeworld: "http://swapi.dev/api/planets/1/"
// id: "44e9e689-9593-4016-963b-c8993aa9d9e0"
// mass: "77"
// name: "Luke Skywalker"
// skin_color: "fair"
// species: []
// component: (2) ["http://swapi.dev/api/starships/12/", "http://swapi.dev/api/starships/22/"]
// url: "http://swapi.dev/api/people/1/"
// vehicles: (2) ["http://swapi.dev/api/vehicles/14/", "http://swapi.dev/api/vehicles/30/"]

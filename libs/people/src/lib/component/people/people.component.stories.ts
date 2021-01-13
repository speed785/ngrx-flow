
import { PeopleComponent } from './people.component';
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";
import {StoreModule} from "@ngrx/store";
import {PeopleFacade} from "../../+state/people.facade";
import {delay} from "rxjs/operators";
import {of} from "rxjs";
import {boolean} from "@storybook/addon-knobs";

const peopleData = [
  {
    'name': 'Luke Skywalker',
    'height': '172',
    'mass': '77',
    'hair_color': 'blond',
    'skin_color': 'fair',
    'eye_color': 'blue',
    'birth_year': '19BBY',
    'gender': 'male',
    'homeworld': 'http://swapi.dev/api/planets/1/',
    'films': ['http://swapi.dev/api/films/1/', 'http://swapi.dev/api/films/2/', 'http://swapi.dev/api/films/3/', 'http://swapi.dev/api/films/6/'],
    'species': [],
    'vehicles': ['http://swapi.dev/api/vehicles/14/', 'http://swapi.dev/api/vehicles/30/'],
    'starships': ['http://swapi.dev/api/starships/12/', 'http://swapi.dev/api/starships/22/'],
    'created': '2014-12-09T13:50:51.644000Z',
    'edited': '2014-12-20T21:17:56.891000Z',
    'url': 'http://swapi.dev/api/people/1/'
  }, {
    'name': 'C-3PO',
    'height': '167',
    'mass': '75',
    'hair_color': 'n/a',
    'skin_color': 'gold',
    'eye_color': 'yellow',
    'birth_year': '112BBY',
    'gender': 'n/a',
    'homeworld': 'http://swapi.dev/api/planets/1/',
    'films': ['http://swapi.dev/api/films/1/', 'http://swapi.dev/api/films/2/', 'http://swapi.dev/api/films/3/', 'http://swapi.dev/api/films/4/', 'http://swapi.dev/api/films/5/', 'http://swapi.dev/api/films/6/'],
    'species': ['http://swapi.dev/api/species/2/'],
    'vehicles': [],
    'starships': [],
    'created': '2014-12-10T15:10:51.357000Z',
    'edited': '2014-12-20T21:17:50.309000Z',
    'url': 'http://swapi.dev/api/people/2/'
  }, {
    'name': 'R2-D2',
    'height': '96',
    'mass': '32',
    'hair_color': 'n/a',
    'skin_color': 'white, blue',
    'eye_color': 'red',
    'birth_year': '33BBY',
    'gender': 'n/a',
    'homeworld': 'http://swapi.dev/api/planets/8/',
    'films': ['http://swapi.dev/api/films/1/', 'http://swapi.dev/api/films/2/', 'http://swapi.dev/api/films/3/', 'http://swapi.dev/api/films/4/', 'http://swapi.dev/api/films/5/', 'http://swapi.dev/api/films/6/'],
    'species': ['http://swapi.dev/api/species/2/'],
    'vehicles': [],
    'starships': [],
    'created': '2014-12-10T15:11:50.376000Z',
    'edited': '2014-12-20T21:17:50.311000Z',
    'url': 'http://swapi.dev/api/people/3/'
  }
]

export default {
  title: 'PeopleComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [
        NzGridModule,
        NzCardModule,
        NzSkeletonModule,
        StoreModule.forRoot([]),
    ],
    providers: [PeopleFacade]
  },
  component: PeopleComponent,
  props: {
    //knob of is loaded$
    peopleFacade: {
      loaded$: of(boolean('loaded$', true)),
      init: () => {
      },
      allPeople$: of(peopleData),
      count$: of(peopleData.length)
    }
  }
})



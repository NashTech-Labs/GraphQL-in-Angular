import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

import { Injectable } from '@angular/core';
import { Films } from './films.model';

const FILMS = gql`
{
  allFilms {
    films{
      title
      director
      releaseDate
    }
  }
}
`

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  constructor(private apollo: Apollo) {}

  getMoviesName(): Observable<Films[]> {
    return this.apollo
      .watchQuery<any>({
        query: FILMS,
      })
      .valueChanges.pipe(map((result) => result.data.allFilms.films));
  }
}
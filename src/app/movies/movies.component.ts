import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  tableColumns: string[] = ['title','director','releaseDate'];
  moviesData$ = this.filmService.getMoviesName();

  constructor(private filmService: FilmsService) {}

  ngOnInit(): void {
  }

}

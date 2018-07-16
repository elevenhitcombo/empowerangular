import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { FilmResults } from '../models/film/film-results';
import { Film } from '../models/film/film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  results : FilmResults = new FilmResults();
  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmService.list(1)
      .subscribe(results => {
        this.results = results;
      }
    );
  }
}

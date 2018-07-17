import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FilmService } from '../film.service';
import { Film } from '../models/film/film';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  id : Number;
  film : Film;

  constructor(
    private filmService: FilmService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getFilm();
  }
  
  getFilm(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.filmService.detail(id)
      .subscribe(film => this.film = film);
  }
}

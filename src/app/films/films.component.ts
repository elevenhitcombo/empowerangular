import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { FilmResults } from '../models/film/film-results';
import { Film } from '../models/film/film';


// Main declaration that this class is a component
@Component({
  // Refers to the custom HTML tag that Angular will
  // use to identify the component.
  //
  selector: 'app-films',
  // Is where the "View", equivalent to .cshtml
  templateUrl: './films.component.html',
  // Custom styles per component, and you can
  // use a list of these.
  styleUrls: ['./films.component.css']
})
// This implements OnInit
// This specifically promises to implement a method
// called ngOnInit.
//
// This method is run whenever the component starts
export class FilmsComponent implements OnInit {

  results : FilmResults = new FilmResults();
  // Injecting a film service
  // Most things you see in an Angular components
  // constructor are injected.
  //
  // We have a "private" declaration here.
  // This tells Angular to store this as 
  // a private member variable that can 
  // be accessed inside the class.
  constructor(private filmService: FilmService) { }

  // ngOnInit is a contractual requirement of the OnInit
  // interface.
  //
  ngOnInit() {
    // Calling a method on filmService called list,
    // passing a page number of 1
    this.filmService.list(1)
      // I know I don't have the results straightaway
      .subscribe(results => {
        // Yup.  Results are here.
        // Store them locally.
        this.results = results;
      }
    );
  }
}

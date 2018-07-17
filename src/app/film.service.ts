import { Injectable } from '@angular/core';
import { WebApiService } from './webapi.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilmResults } from './models/film/film-results';
import { Film } from './models/film/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService extends WebApiService {
  serviceUrl : string = "film";

  constructor(http: HttpClient)  { 
    super(http);
  }

  list(page : Number) {
    // Setting the location of where the API service can be found
    // 
    // We're also using string interpolation.
    // 
    let url = `${this.apiHost}/${this.serviceUrl}/list/${page}`;

    // We're using the http client to visit the resource.
    // If we want to access member variables, we have to 
    // prefix them with this, which is a shorthand to the 
    // current instantiation.
    return this.http
      // get
      .get<FilmResults>(url, { headers: this.headers });
  }

  detail(id: Number){
    let url = `${this.apiHost}/${this.serviceUrl}/get/${id}`;
    return this.http
      .get<Film>(url, { headers: this.headers });
  }
}

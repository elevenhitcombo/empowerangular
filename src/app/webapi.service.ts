import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WebApiService {
  protected apiHost: string = "http://localhost:4795/api";
  protected headers = new HttpHeaders();

  constructor(protected http: HttpClient) {
      this.headers.append('Content-Type', 'application/json');
  }

  handleError() {

  }
}

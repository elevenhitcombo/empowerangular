import { Injectable } from '@angular/core';
import { WebApiService } from './webapi.service';
import { HttpClient } from '@angular/common/http';
import { CategoryResult } from './models/category/category-result';
import { Category } from './models/category/category';
import { CreateResponse } from './models/category/create-response';
import { CreateRequest } from './models/category/create-request';
import { encodeUriQuery, encodeUriFragment } from '@angular/router/src/url_tree';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends WebApiService{
  serviceUrl : string = "category";
  constructor(http: HttpClient) { 
    // Calls the base constructor class  
    super(http);
  }

  list(page : Number){
    // Set up the url where we are going to get our results from
    const url = `${this.apiHost}/${this.serviceUrl}/list/${page}`;

    // We're using the injected http service 
    return this.http
      // to fire a GET request at the specified URL
      // specifying that the return type
      .get<CategoryResult>(url, {headers: this.headers});
  }

  detail(id : Number){
    const url = `${this.apiHost}/${this.serviceUrl}/get/${id}`;
    return this.http
      .get<Category>(url, { headers: this.headers });
  }

  update(category: Category){
    const name = encodeURIComponent(category.name);
    const url = `${this.apiHost}/${this.serviceUrl}/update/${category.id}/${category.name}`;
    return this.http
      .put<CreateResponse>
      (url, JSON.stringify({}), {headers: this.headers});
  }

  create(category: Category){
    const name = encodeURIComponent(category.name);
    const url = `${this.apiHost}/${this.serviceUrl}/create?Name=${name}`;
    // const url = `${this.apiHost}/${this.serviceUrl}/create?FirstName=${firstName}&LastName=${lastName}`;
    return this.http
      .post<CreateResponse>(url, 
        JSON.stringify({}), 
        { headers: this.headers });
  }

  delete(id : Number){
    const url = `${this.apiHost}/${this.serviceUrl}/delete/${id}`;
    return this.http.delete(url, {headers: this.headers});
  }
}

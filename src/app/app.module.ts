import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { WebApiService } from './webapi.service';
import { FilmService } from './film.service';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { RouterModule } from '@angular/router';
import { CategoryEditorComponent } from './category-editor/category-editor.component';
// Bring the files in so that they can be used.
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmDetailComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    CategoryEditorComponent
  ],
  imports: [
    // We'll have to import forms module here
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [WebApiService,FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmsComponent } from './films/films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryEditorComponent } from './category-editor/category-editor.component';

const routes: Routes = [
  // path - represents the bit you would after localhost:4200
  // component - what to give the user if that path is entered
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'films', component: FilmsComponent },
  { path: 'film/:id', component: FilmDetailComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category/new', component: CategoryEditorComponent },
  { path: 'category/edit/:id', component: CategoryEditorComponent },
  { path: 'category/:id', component: CategoryDetailComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
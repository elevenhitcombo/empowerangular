import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { CategoryResult } from '../models/category/category-result';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  statusMessage: string = "";
  results : CategoryResult = new CategoryResult();

  constructor(private categoryService : CategoryService) { }

  deleteCategory(id : Number){
    this.categoryService.delete(id)
      .subscribe(data => this.list());
  }

  list(){
    this.categoryService.list(1)
      .subscribe(
          data => 
            this.results = data
      );
  }

  ngOnInit() {
    this.list();
  }
}

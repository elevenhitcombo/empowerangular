import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../models/category/category';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit { 
  id : Number;
  // Our loaded category is going to appear
  category : Category;
  constructor(
    private categoryService: CategoryService,
    private location: Location,
    private route: ActivatedRoute) { }

 
  ngOnInit() {
    this.getCategory();
  }

  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.categoryService.detail(id)
      // We are interested in the result of this call
      .subscribe(
          // Results are in.
          // Set our local variable.
          cat => this.category = cat
      );
  }
}



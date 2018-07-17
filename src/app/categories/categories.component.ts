import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { CategoryResult } from '../models/category/category-result';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  results : CategoryResult = new CategoryResult();

  constructor(private categoryService : CategoryService) { }

  ngOnInit() {
    // This is where we set our component up 
    // This will run every time the component is selected.

    // Bring the results in using a service.
    // Call the method
    this.categoryService.list(1)
      // Subscribe says we're interested in the results
      // when they come in.
      .subscribe(
          // When you are inside subscribe,
          // the results are ready
          //
          // You can create a shorthand for
          // the results with a lambda expresssion
          data => 
            // You can then assign that to your local
            // component
            this.results = data
      );
  }
}

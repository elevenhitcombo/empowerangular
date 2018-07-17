import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../models/category/category';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.css']
})
export class CategoryEditorComponent implements OnInit {
  // Whether we are editing, or creating, we can store the 
  // details of whatever we're doing in this variable.
  category : Category;
  statusMessage : string;
  constructor(
    private categoryService : CategoryService,
    // We're injecting a Router because we want to 
    // take the user somewhere else on success
    private router : Router,
    private location: Location,
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.category = new Category();
    this.getCategory();
    this.statusMessage = "Form loaded";
  }

  update(){
    this.categoryService.update(this.category)
      .subscribe(
        // Deal with results when they come into.
          // data = the name we'll use for the results
          data => {
            // Deal with the error state
            if (data.hasErrored){
              this.statusMessage = data.errorMessage;
            }
            // Deal with the success state
            else{
              this.router.navigate(['/categories']);
            }
          }
      );
  }

  create(){
    // Call the service
    this.categoryService.create(this.category)
      // Subscribe to result
      .subscribe(
          // Deal with results when they come into.
          // data = the name we'll use for the results
          data => {
            // Deal with the error state
            if (data.hasErrored){
              this.statusMessage = data.errorMessage;
            }
            // Deal with the success state
            else{
              this.router.navigate(['/categories']);
            }
          }
      );
  }

  getCategory(): void {
    let id = + this.route.snapshot.paramMap.get('id');
    if ( id ){
      this.categoryService.detail(id)
        .subscribe(
            data => this.category = data
        );
    }
    else{
      this.category.id = 0;
    }
  }
}

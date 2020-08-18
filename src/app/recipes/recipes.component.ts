import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipesService} from "./recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styles: [],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit(): void {
    this.recipesService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      }
    )
  }

}

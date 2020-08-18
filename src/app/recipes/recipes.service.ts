import {EventEmitter} from '@angular/core';

import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";

// @ts-ignore
// @Injectable({
//   providedIn: 'root'
// })
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'This is just the test recipe',
      'https://rb.gy/exlm6g',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe(
      'Big Fat Burger',
      'This is just the test recipe',
      'https://rb.gy/exlm6g',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}

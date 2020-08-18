import {EventEmitter} from '@angular/core';

import {Recipe} from "./recipe.model";

// @ts-ignore
// @Injectable({
//   providedIn: 'root'
// })
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is just the test recipe', 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Olivier_Russian_salad_made_to_the_Hermitage_restaurant_recipe.jpg'),
    new Recipe('Another Test Recipe', 'This is just the test recipe', 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Olivier_Russian_salad_made_to_the_Hermitage_restaurant_recipe.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}

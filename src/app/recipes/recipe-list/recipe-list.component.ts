import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styles: [
  ]
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is just the test recipe', 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Olivier_Russian_salad_made_to_the_Hermitage_restaurant_recipe.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

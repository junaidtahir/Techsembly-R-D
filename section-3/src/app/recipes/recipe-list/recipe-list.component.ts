import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Vegitable Omlet', 'Onion, Tomato and Egg', 'https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/breakfast_omelets_garden-vegetable-omelet.jpg'),
    new Recipe('Keema matar', 'Keema matar, also rendered Qeema matar', 'https://www.teaforturmeric.com/wp-content/uploads/2023/05/Keema-Matar-04.jpg')
  ];
  constructor() {

  }
  ngOnInit(): void {

  }
}

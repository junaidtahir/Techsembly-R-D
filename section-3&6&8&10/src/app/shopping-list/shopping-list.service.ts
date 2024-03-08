import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    
   private ingredients : Ingredient[] = [
        new Ingredient('Tomato', 100),
        new Ingredient('Onion', 200)
      ];
      getIngredients(){
        return this.ingredients;
      }
      pushIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        console.log(this.ingredients)
      }
}
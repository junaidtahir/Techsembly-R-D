import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css'
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;
  id: number;
  editMode: boolean = false;
  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.editMode = params['id'] != null;
      this.initForm();
    })
  }
  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipeForm.value['name'],
    //    this.recipeForm.value['description'],
    //    this.recipeForm.value['imagePath'],
    //    this.recipeForm.value['ingredients']);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipeForm.value)
    } else{
      this.recipeService.addRecipe(this.recipeForm.value);
    }
    this.onCancel()
  }
  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngridients = new FormArray([])

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id)
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngridients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [
              Validators.required,
              Validators.pattern(/^[1-9]+[0-9]*$/)
            ]
            )
          }));
        }
      }
    }

    this.recipeForm = new FormGroup({
      "name": new FormControl(recipeName, Validators.required),
      "imagePath": new FormControl(recipeImagePath, Validators.required),
      "description": new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngridients
    });

  }
  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  onAddIngridient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
    }));
  }
  onCancel(){
    this.recipeForm.reset()
    this.router.navigate([ '../' ], {relativeTo:this.route})
  }
  removeIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
    // this.recipeService.removeIngridient(this.id, index)
  }
  clearAllIngredients(){
    (<FormArray>this.recipeForm.get('ingredients')).clear();
  }
}
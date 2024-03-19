import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { SubscriptionLog } from 'rxjs/internal/testing/SubscriptionLog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') myForm: NgForm;
  subscription: Subscription;
  constructor(private slService: ShoppingListService) { }
  editMode = false;
  editedItemIndex: number;
  editIngredientItem: Ingredient;
  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe((index: number)=>{
      this.editMode = true;
      this.editedItemIndex = index;
      this.editIngredientItem = this.slService.getIngredient(index);
      this.myForm.setValue({
        name: this.editIngredientItem.name,
        amount: this.editIngredientItem.amount
      })
    })
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredients(this.editedItemIndex, newIngredient);
    }
    else{
      this.slService.addIngredient(newIngredient);
    }
    this.onClear()
  }
  onClear(){
    this.myForm.reset()
    this.editMode = false;
  }
  onDelete(){
    this.slService.deleteIngridient(this.editedItemIndex)
    this.onClear()
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

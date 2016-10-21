import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Log a New Meal</h3>
    <form class="newMeal">
      <input placeholder="Enter meal"
      #newMeal class="form-control"/>
      <input placeholder="Amount of Calories" type="number"
      #mealCalories class="form-control"/>
      <input placeholder="Details"
      #mealDetails class="form-control"/>
      <button (click)="addMeal(newMeal, mealCalories, mealDetails)" class="btn btn-primary btn-lg">Submit</button>
    </form>
  </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newMeal: HTMLInputElement, mealCalories: HTMLInputElement, mealDetails: HTMLInputElement) {
    var newLoggedMeal = new Meal(newMeal.value, parseInt(mealCalories.value), mealDetails.value);
    this.onSubmitNewMeal.emit(newLoggedMeal);
    newMeal.value = "";
    mealCalories.value = "";
    mealDetails.value = "";
  }
}

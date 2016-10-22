import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Welcome to Tam's Meal Tracker</h1>
    <meal-list
      [childMealList]="mealMasterList"
      (clickSender)="showDetails($event)"
    ></meal-list>
    <edit-meal
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finshedEditing()"
    ></edit-meal>
  `
})

export class AppComponent {
  public mealMasterList: Meal[] = [
      new Meal("Burrito", 600, "Burrito that filled me up!"),
      new Meal("Spaghetti.", 900, "I am in a food coma."),
      new Meal("Salad", 100, "It didn't fill me up."),
      new Meal("Chips", 200, "I'm lethargic.")
  ];

  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
}

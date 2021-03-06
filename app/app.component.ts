import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Welcome to Tam's Meal Tracker!</h1>
      <new-meal
        (newMealSender)="addMeal($event)"
      ></new-meal>
      <meal-list
        [childMealList]="mealMasterList"
        (clickSender)="showDetails($event)"
      ></meal-list>
      <edit-meal
        [childSelectedMeal]="selectedMeal"
        (doneClickedSender)="finishedEditing()"
      ></edit-meal>
    </div>
  `
})

export class AppComponent {
  public mealMasterList: Meal[] = [
      new Meal("Burrito", 600, "Burrito that filled me up!"),
      new Meal("Spaghetti.", 900, "I am in a food coma."),
      new Meal("Salad", 100, "It didn't fill me up."),
      new Meal("Chips", 200, "I'm lethargic."),
      new Meal("Vegan burger", 450, "Pretty good burger, but didn't fill me up."),
      new Meal("Macaroni and Cheese", 900, "This filled me up nicely."),
      new Meal("Maple doughnut", 10, "Absolutely horrendous. Doughnut didn't use any flour, but powdered grass as a substitute.")
  ];

  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal) {
    this.mealMasterList.push(newMealFromChild);
  }
}

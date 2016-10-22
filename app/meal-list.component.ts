import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div *ngFor="let currentMeal of meals">
      <h3>{{ currentMeal.name }}</h3>
      <button (click)="showDetails(currentMeal)">Edit</button>
    </div>
  `
})

export class MealListComponent {
  public meals: Meal[] = [
      new Meal("Burrito", 600, "Burrito that filled me up!"),
      new Meal("Spaghetti.", 900, "I am in a food coma."),
      new Meal("Salad", 100, "It didn't fill me up."),
      new Meal("Chips", 200, "I'm lethargic.")
  ];
}

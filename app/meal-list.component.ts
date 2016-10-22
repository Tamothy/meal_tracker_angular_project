import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div class="col-md-6">
      <h2>Meals Logged</h2>
      <div *ngFor="let currentMeal of childMealList">
        <h5>Meal: {{ currentMeal.name }}</h5>
        <h5>Calorie Count: {{ currentMeal.calorie }}</h5>
        <h5>Description: {{ currentMeal.description }}</h5>
        <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
      </div>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(MealToEdit: Meal) {
    this.clickSender.emit(MealToEdit);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div class="col-md-6">
      <h3>Meals Logged</h3>
      <select (change)="onChange($event.target.value)">
        <option value="all" selected="selected">Show all meals</option>
        <option value="lowCalorie">Low calorie meals</option>
        <option value="highCalorie">High calorie meals</option>
      </select>
      <div *ngFor="let currentMeal of childMealList | calorie: selectedCalorieOption">
        <h5><span class="red">{{ currentMeal.name }}</span></h5>
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
  public selectedCalorieOption: string = "all";
  onChange(optionFromMenu) {
    this.selectedCalorieOption = optionFromMenu;
    console.log(this.selectedCalorieOption);
  }
}

import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDisplayComponent } from './meal-display.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriesPipe } from './calories.pipe';
import { EditMealDetailsComponent } from './edit-meal-component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriesPipe],
  directives: [MealDisplayComponent, NewMealComponent, EditMealDetailsComponent],
  template: `
  <div class="meal-list-container">
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
    <select (change)="onChange($event.target.value)">
      <option selected="selected" value="all">View All</option>
      <option value="high">High Calorie Meals</option>
      <option value="low">Low Calorie Meals</option>
    </select>
    <h2>List of Your Meals</h2>
    <meal-display *ngFor="#meal of mealList | calories:filterCalories"
    (click)="mealClicked(meal)"
    [meal]="meal"></meal-display>
    <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
    </edit-meal-details>
  </div>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCalories: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: Meal): void {
    this.mealList.push(newMeal);
  }
  onChange(filterOption) {
    this.filterCalories = filterOption;
  }
}

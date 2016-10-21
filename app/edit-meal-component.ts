import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="edit-meal-container">
    <h3>Edit Meal Information:</h3>
    <label for="name">Update Name:</label>
    <input [(ngModel)]="meal.name" class="form-control"/>
    <label for="name">Update Calories:</label>
    <input [(ngModel)]="meal.calories" class="form-control"/>
    <label for="name">Update Description:</label>
    <input [(ngModel)]="meal.details" class="form-control"/>
  </div>
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}

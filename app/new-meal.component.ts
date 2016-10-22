import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h2>New Meal</h2>
    <div>
      <label>Meal:</label>
      <input #newMealName>
    </div>
    <div>
      <label>Calorie count:</label>
      <input #newMealCalorie>
    </div>
    <div>
      <label>Description:</label>
      <input #newMealDescription>
      <button (click)="
        addClicked(newMealName.value, newMealCalorie.value, newMealDescription.value);
        newMealName.value='';
        newMealCalorie.value='';
        newMealDescription.value='';
        ">Add</button>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, calorie: number, description: string) {
    var newMealToAdd: Meal = new Meal(name, calorie, description);
    this.newMealSender.emit(newMealToAdd);
  }
}

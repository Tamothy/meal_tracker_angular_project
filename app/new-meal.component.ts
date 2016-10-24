import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <h3>New Meal</h3>
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
  addClicked(name: string, calorie: string, description: string) {
    //check if input form is empty
    if (name != '' && calorie != '' && description != '' ) {
      var parseCalorie = parseInt(calorie);
      var newMealToAdd: Meal = new Meal(name, parseCalorie, description);
      this.newMealSender.emit(newMealToAdd);
    } else {
      alert("Please fill out the form!");
    }
  }
}

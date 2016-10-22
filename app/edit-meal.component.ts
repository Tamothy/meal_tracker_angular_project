import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div class="col-md-6">
      <div *ngIf="childSelectedMeal">
      <h2>Edit Meal</h2>
       <div>
         <label>Meal:</label>
         <input [(ngModel)]="childSelectedMeal.name">
       </div>
       <div>
         <label>Calorie count:</label>
         <input [(ngModel)]="childSelectedMeal.calorie">
       </div>
       <div>
         <label>Description:</label>
         <input [(ngModel)]="childSelectedMeal.description">
         <button (click)="doneClicked()">Done</button>
       </div>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}

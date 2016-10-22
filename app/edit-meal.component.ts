import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
     <h1>Edit Meal</h1>
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
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}

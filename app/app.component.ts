import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="wrap">
  <h1>Meal Tracker</h1>
    <div class="container">
      <h3 (click)="showDetails(currentMeal)" *ngFor="let currentMeal of meals">{{ currentMeal.mealName }}</h3>
      <div>
        <h1>Edit Task</h1>
        <label>Description: {{ selectedMeal.mealName }}</label>
        <input [(ngModel)]="selectedMeal.mealName">
        <label>Calories: {{ selectedMeal.calorieInfo }}</label>
        <input [(ngModel)]="selectedMeal.calorieInfo">
        <label>Meal Information: {{ selectedMeal.mealInfo }}</label>
        <input [(ngModel)]="selectedMeal.mealInfo">
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[] = [
      new Meal("Don Carlos's Burrito", 800, "This burrito will most definitely fill you up!"),
      new Meal("Stella's Spaghetti", 2000, "Haven't ate all day? This spaghetti will do justice!"),
      new Meal("Sally's Salad", 350, "Salads are cool, but they won't fill you up")
    ];

  selectedMeal: Meal = this.meals[0];
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
}

export class Meal {
  public done: boolean = false;
  constructor(public mealName: string, public calorieInfo: number, public mealInfo: string) {}
}

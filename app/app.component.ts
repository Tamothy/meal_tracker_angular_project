import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="wrap">
  <h1>Meal Tracker</h1>
    <div class="container">
      <div class="pie" *ngFor="let currentMeal of meals">
        <p>{{currentMeal.mealName}}</p>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Don Carlos's Burrito", 800, "This burrito will most definitely fill you up!"),
      new Meal("Stella's Spaghetti", 2000, "Haven't ate all day? This spaghetti will do justice!"),
      new Meal("Sally's Salad", 350, "Salads are cool, but they won't fill you up")
    ];
  }
}

export class Meal {
  constructor(public mealName: string, public calorieInfo: number, public mealInfo: string) {}
}

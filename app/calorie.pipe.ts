import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calorie",
  pure: false
})

export class CaloriePipe implements PipeTransform {
  transform (input: Meal[], meal) {
    var output: Meal[] = []
    if (meal === "lowCalorie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calorie < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (meal === "highCalorie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].calorie >= 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}

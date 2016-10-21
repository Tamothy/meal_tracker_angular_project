
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { MealListComponent } from './meal-list.component';
import { EditMealDetailsComponent } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriesPipe } from './calories.pipe';
import { MealDisplayComponent } from './meal-display.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    MealListComponent,
    EditMealDetailsComponent,
    NewMealComponent,
    CaloriesPipe,
    MealDisplayComponent,
    MealListComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }

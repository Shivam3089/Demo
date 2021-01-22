import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing/landing.component';
import { BudgetModule } from '../budget/budget.module';
import { BudgetRoutingModule } from '../budget/budget-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BudgetModule,
    LandingRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LandingComponent
  ]
})
export class LandingModule {}

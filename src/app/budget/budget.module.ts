import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetSummaryComponent } from './budget-summary/budget-summary.component';
import { AccountistComponent } from './account-list/account-list.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SortDirective } from '../common/directive/sort.directive';
import { AccountSummaryComponent } from './account-summary/account-summary.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BudgetRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    BudgetListComponent,
    BudgetSummaryComponent,
    AccountistComponent,
    CreateAccountComponent,
    AccountSummaryComponent,
    SortDirective
  ],
})
export class BudgetModule { }

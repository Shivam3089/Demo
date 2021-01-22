import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { BudgetSummaryComponent } from './budget-summary/budget-summary.component';


const budgetRoutes: Routes = [
  // {
  //   path: '',
  //   component: BudgetListComponent,
  //   children: [
  //     {
  //       path: ':summary',
  //       component: BudgetSummaryComponent,

  //     }]
  // },
];

@NgModule({
  imports: [
    RouterModule.forChild(budgetRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BudgetRoutingModule { }

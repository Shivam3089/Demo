import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountistComponent } from '../budget/account-list/account-list.component';
import { AccountSummaryComponent } from '../budget/account-summary/account-summary.component';
import { BudgetListComponent } from '../budget/budget-list/budget-list.component';
import { BudgetSummaryComponent } from '../budget/budget-summary/budget-summary.component';
import { CreateAccountComponent } from '../budget/create-account/create-account.component';


const landingRoutes: Routes = [
  {
    path: 'budget', component: BudgetListComponent,
    loadChildren: () => import('./../budget/budget.module').then(m => m.BudgetModule),
    data: { preload: true }
  },
  {
    path: 'summary', component: BudgetSummaryComponent,
  },
  {
    path: 'accounts', component: AccountistComponent,
  },
  {
    path: 'createAccount', component: CreateAccountComponent,
  },
  {
    path: 'accountSummary', component: AccountSummaryComponent, 
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(landingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LandingRoutingModule { }

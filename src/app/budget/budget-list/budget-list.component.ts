import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBudget, IBudgetData } from '../budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {

  public dataSource : IBudget[];
  constructor(private budgetService: BudgetService, private cd: ChangeDetectorRef, private router: Router) {

  }

  ngOnInit() {
    this.budgetService.getBudgetList()
      .subscribe((res) => {
        if (res) {
          this.dataSource = res.data.budgets;
          this.cd.markForCheck();
        }
      })
  }

  public showSummary(budget:IBudget): void {
    this.router.navigate(['/summary'],{queryParams:{'id':budget.id}});
  }
}

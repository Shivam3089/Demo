import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBudge, IBudget, IBudgetData } from '../budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-budget-summary',
  templateUrl: './budget-summary.component.html',
  styleUrls: ['./budget-summary.component.css']
})
export class BudgetSummaryComponent implements OnInit {


  public budget: IBudget;
  constructor(private route: ActivatedRoute, private router: Router, private budgetService: BudgetService,
    private cd: ChangeDetectorRef) {

  }


  ngOnInit(): void {
    let id = this.route.snapshot.queryParams['id'];
    this.budgetService.getBudget(id)
      .subscribe((res) => {
        if (res) {
          this.budget = res.data.budget;
          this.cd.markForCheck();
        }
      })
  }

  public showAccount(id: string): void {
    this.router.navigate(['/accounts'], { queryParams: { 'id': id } });
  }

  public back(): void {
    this.router.navigate(['/budget']);
  }
}

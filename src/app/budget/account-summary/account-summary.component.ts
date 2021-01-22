import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAccount, IBudge, IBudget, IBudgetData } from '../budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {

  public account: IAccount;

  constructor(private route: ActivatedRoute, private router: Router, private budgetService: BudgetService,
    private cd: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.queryParams['id'];
    let accountID = this.route.snapshot.queryParams['accountId'];
    this.budgetService.getAccountSummary(id, accountID)
      .subscribe((res) => {
        if (res) {
          this.account = res.data.account;
          this.cd.markForCheck();
        }
      })
  }
  
  public back(): void {
    this.router.navigate(['/accounts'], { queryParams: { 'id': this.route.snapshot.queryParams['id'] } });
  }

}

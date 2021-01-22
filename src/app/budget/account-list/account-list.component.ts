import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAccount, IAccounts, IAccountSummary, IBudget, IBudgetData } from '../budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountistComponent implements OnInit {


  public account: IAccount[];
  constructor(private route: ActivatedRoute, private budgetService: BudgetService,
    private cd: ChangeDetectorRef, private router: Router) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.queryParams['id'];
    this.budgetService.getAccount(id)
      .subscribe((res) => {
        if (res) {
          this.account = res.data.accounts;
          this.cd.markForCheck();
        }
      })
  }

  public addAccount(): void {
    this.router.navigate(['/createAccount'], { queryParams: { 'id': this.route.snapshot.queryParams['id'] } });
  }

  public showSummary(accountId: string): void {
    this.router.navigate(['/accountSummary'], {
      queryParams: {
        'id': this.route.snapshot.queryParams['id'],
        'accountId': accountId
      }
    });
  }

  public back(): void {
    this.router.navigate(['/summary'], { queryParams: { 'id': this.route.snapshot.queryParams['id'] } });
  }


}


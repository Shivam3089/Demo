import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IAccount, IAccounts, IAccountSummary, IBudget, IBudgetData, ICreateAccount } from '../budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  public types = ['checking', 'savings', 'creditCard', 'cash', 'lineOfCredit', 'carLoan'];
  accountForm = this.fb.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
    balance:['', [Validators.required, Validators.min(0)]]
  });

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private budgetService: BudgetService, private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.queryParams['id'];
  }

  public get formValue(): any {
    return this.accountForm.getRawValue();
  }

  public saveAccount(): void{
    const account: ICreateAccount = {
      name: this.formValue.name,
      type:this.formValue.type,
      balance: this.formValue.balance,
    };
    this.budgetService.saveAccount(this.route.snapshot.queryParams['id'],account)
    .subscribe((res) => {
      if (res) {
        this.router.navigate(['/accounts'],{queryParams:{'id':this.route.snapshot.queryParams['id']}});
      }
    })
  }

  public cancelAccount(): void{
    this.router.navigate(['/accounts'],{queryParams:{'id':this.route.snapshot.queryParams['id']}});
  }

}




import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccount, IAccountDetail, IAccountDetails, IAccountSummary, IBudge, IBudgetData, IBudgetSummary, ICreateAccount } from './budget';


@Injectable({
  providedIn: 'root',
})
export class BudgetService {
  constructor(private http: HttpClient) { }
  /**
   * @name 
   * @description get budget list
   */
  public getBudgetList(): Observable<IBudgetData> {
    return this.http.get<IBudgetData>('https://api.youneedabudget.com/v1/budgets');
  }

    /**
   * @name 
   * @description get budget
   */
  public getBudget(id: string): Observable<IBudgetSummary> {
    return this.http.get<IBudgetSummary>(`https://api.youneedabudget.com/v1/budgets/${id}`);
  }

      /**
   * @name 
   * @description get account
   */
  public getAccount(id: string): Observable<IAccountSummary> {
    return this.http.get<IAccountSummary>(`https://api.youneedabudget.com/v1/budgets/${id}/accounts`);
  }

        /**
   * @name 
   * @description get account
   */
  public getAccountSummary(id: string,accountId: string): Observable<IAccountDetails> {
    return this.http.get<IAccountDetails>(`https://api.youneedabudget.com/v1/budgets/${id}/accounts/${accountId}`);
  }

  public saveAccount(id:string,payload: ICreateAccount): Observable<any> {
    const data={
      "account":payload
    }
     return this.http.post(`https://api.youneedabudget.com/v1/budgets/${id}/accounts`, data);
  }
}

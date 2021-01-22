import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IData, IUserInfo } from './account';


@Injectable()
export class AccountService {
  constructor(private http: HttpClient) { }
  /**
   * @name getUUerInfo
   * @description get billing branch list for customers locations
   */
  public getuserInfo(): Observable<IData> {
    const apiUrl = `${environment.budgetUrl}/user`;
    return this.http.get<IData>('https://api.youneedabudget.com/v1/user');

    //return {"data":{"user":{"id":"5c6b74c5-54c7-4f96-a81f-9af3bbbb79ac"}}}
  }

  

}

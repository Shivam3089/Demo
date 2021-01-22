import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IData, IUserInfo } from './header';


@Injectable()
export class HeaderService {
  constructor(private http: HttpClient) { }
  /**
   * @name getUUerInfo
   * @description get billing branch list for customers locations
   */
  public getuserInfo(): Observable<IData> {
    return this.http.get<IData>('https://api.youneedabudget.com/v1/user');
  }

}

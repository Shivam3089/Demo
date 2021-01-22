import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AccountService } from './account.service';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { IData, IUser, IUserInfo } from './account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountComponent implements OnInit {

  public user: IUser;

  constructor(private accountService: AccountService, private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    
  }


}

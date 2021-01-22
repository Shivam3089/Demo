import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HeaderService } from './header.service';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { IData, IUser, IUserInfo } from './header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  public user: IUser;

  constructor(private headerService: HeaderService, private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.headerService.getuserInfo()
      .subscribe((res) => {
        if (res) {
          this.user = res.data.user;
          this.cd.markForCheck();
        }
      })
  }


}

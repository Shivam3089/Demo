import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent  {

  constructor(private router: Router) {

  }

  public openBudget(): void {
    this.router.navigate(['/budget']);
  }

  
  public openAccount(): void {
    //this.router.navigate(['/budget']);
  }
}

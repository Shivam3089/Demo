import { Component, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  constructor(private router: Router) {
    
    
  }

  ngOnDestroy() {
   
  }

}

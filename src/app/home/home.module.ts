import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from '../landing/landing-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    LandingRoutingModule
  ],
  entryComponents: [],
  declarations: [HomeComponent, HeaderComponent, FooterComponent]
})
export class HomeModule { }

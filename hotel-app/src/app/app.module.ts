import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservationModule } from './reservation/reservation.module';
import { HomeModule } from './home/home.module';
// import { ReservationFormComponent } from './reservation-form/reservation-form.component';

@NgModule({
  declarations: [AppComponent],
  //Import other modules to make them available in the app module
  imports: [BrowserModule, AppRoutingModule, ReservationModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

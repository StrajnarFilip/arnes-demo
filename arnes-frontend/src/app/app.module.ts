import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewReservationComponent } from './components/new-reservation/new-reservation.component';
import { AllReservationsComponent } from './components/all-reservations/all-reservations.component';

@NgModule({
  declarations: [
    AppComponent,
    NewReservationComponent,
    AllReservationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

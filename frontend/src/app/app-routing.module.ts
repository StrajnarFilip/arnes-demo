import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllReservationsComponent } from './components/all-reservations/all-reservations.component';
import { NewReservationComponent } from './components/new-reservation/new-reservation.component';

const routes: Routes = [
  { path: 'reservations', component: AllReservationsComponent },
  { path: 'new-reservation', component: NewReservationComponent },
  { path: '**', redirectTo: 'reservations' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

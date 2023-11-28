import { Component } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.scss'],
})
export class NewReservationComponent {
  roomName: string = '';
  reservationDay: Date = new Date();


  constructor(private reservationService: ReservationService) {}

  add() {
    const reservation = {
      roomName: this.roomName,
      reserveFrom: '',
      reserveTo: '',
    };
    console.log(this.reservationDay);
    this.reservationService.addReservation(reservation);
  }
}

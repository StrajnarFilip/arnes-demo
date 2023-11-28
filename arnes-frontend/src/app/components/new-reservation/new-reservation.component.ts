import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { DateTime } from 'luxon';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-new-reservation',
  templateUrl: './new-reservation.component.html',
  styleUrls: ['./new-reservation.component.scss'],
})
export class NewReservationComponent implements OnChanges {
  roomName: string = '';
  reservationDay: Date = new Date();
  timeFrom: string = '';
  timeTo: string = '';
  reservedFrom: DateTime = DateTime.now();
  reservedTo: DateTime = DateTime.now();

  darkTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#424242',
      buttonColor: '#fff',
    },
    dial: {
      dialBackgroundColor: '#424242',
    },
    clockFace: {
      clockFaceBackgroundColor: '#424242',
      clockHandColor: '#800080',
      clockFaceTimeInactiveColor: '#fff',
    },
  };
  constructor(private reservationService: ReservationService) {}

  ngOnChanges(_: SimpleChanges): void {
    this.update();
  }

  update() {
    console.log('UPDATE');
    const reservationDay = DateTime.fromJSDate(this.reservationDay);
    if (this.timeFrom) {
      const [hourFrom, minuteFrom] = this.timeFrom
        .split(':')
        .map(Number.parseFloat);
      this.reservedFrom = DateTime.fromObject({
        year: reservationDay.year,
        month: reservationDay.month,
        day: reservationDay.day,
        hour: hourFrom,
        minute: minuteFrom,
      });
    }

    if (this.timeTo) {
      const [hourTo, minuteTo] = this.timeTo.split(':').map(Number.parseFloat);
      this.reservedTo = DateTime.fromObject({
        year: reservationDay.year,
        month: reservationDay.month,
        day: reservationDay.day,
        hour: hourTo,
        minute: minuteTo,
      });
    }
  }

  add() {
    this.update();

    const from = this.reservedFrom.toISO();
    const to = this.reservedTo.toISO();

    if (!from || !to) {
      return;
    }

    const reservation = {
      roomName: this.roomName,
      reserveFrom: from,
      reserveTo: to,
    };
    console.log(this.reservationDay);
    this.reservationService.addReservation(reservation);
  }
}

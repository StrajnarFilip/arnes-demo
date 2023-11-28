import { Injectable } from '@angular/core';
import { ReservationEntity } from '../entities/reservation-entity';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: ReservationEntity[] = [
    {
      roomName: 'Alfa',
      reserveFrom: '2023-11-28T14:48:00.000Z',
      reserveTo: '2023-11-28T15:48:00.000Z',
    },
    {
      roomName: 'Beta',
      reserveFrom: '2023-11-28T14:48:00.000Z',
      reserveTo: '2023-11-28T15:48:00.000Z',
    },
    {
      roomName: 'Gamma',
      reserveFrom: '2023-11-28T14:48:00.000Z',
      reserveTo: '2023-11-28T15:48:00.000Z',
    },
  ];

  constructor() {}

  allReservations(): ReservationEntity[] {
    return this.reservations;
  }
}

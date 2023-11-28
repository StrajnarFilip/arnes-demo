import { Injectable } from '@angular/core';
import { ReservationEntity } from '../entities/reservation-entity';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private readonly BASE_URL = '';

  private reservations: ReservationEntity[] = [
    {
      id: 1,
      roomName: 'Alfa',
      reserveFrom: '2023-11-28T14:48:00.000Z',
      reserveTo: '2023-11-28T15:48:00.000Z',
    },
    {
      id: 2,
      roomName: 'Beta',
      reserveFrom: '2023-11-28T14:48:00.000Z',
      reserveTo: '2023-11-28T15:48:00.000Z',
    },
    {
      id: 3,
      roomName: 'Gamma',
      reserveFrom: '2023-11-28T14:48:00.000Z',
      reserveTo: '2023-11-28T15:48:00.000Z',
    },
  ];

  constructor(private httpClient: HttpClient) {}

  allReservations(): ReservationEntity[] {
    return this.reservations;
  }

  addReservation(reservation: Omit<ReservationEntity, 'id'>) {}

  removeReservation(id: number) {}
}

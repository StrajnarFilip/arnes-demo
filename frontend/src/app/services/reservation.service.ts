import { Injectable } from '@angular/core';
import { ReservationEntity } from '../entities/reservation-entity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private readonly BASE_URL = 'http://localhost:8080';

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

  allReservations(): Observable<ReservationEntity[]> {
    return this.httpClient.get<ReservationEntity[]>(
      `${this.BASE_URL}/reservations`
    );
  }

  addReservation(reservation: Omit<ReservationEntity, 'id'>) {
    return this.httpClient.post(`${this.BASE_URL}/reservation`, reservation, {
      observe: 'response',
    });
  }

  removeReservation(id: number) {
    return this.httpClient.delete(`${this.BASE_URL}/reservation/${id}`, {responseType: 'text'});
  }
}

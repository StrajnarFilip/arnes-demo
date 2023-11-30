import { Injectable } from '@angular/core';
import { ReservationEntity } from '../entities/reservation-entity';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private readonly BASE_URL = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  allReservations(): Observable<ReservationEntity[]> {
    return this.httpClient.get<ReservationEntity[]>(
      `${this.BASE_URL}/reservations`,
    );
  }

  addReservation(
    reservation: Omit<ReservationEntity, 'id'>,
  ): Observable<HttpResponse<string>> {
    return this.httpClient.post(`${this.BASE_URL}/reservation`, reservation, {
      observe: 'response',
      responseType: 'text',
    });
  }

  removeReservation(id: number): Observable<string> {
    return this.httpClient.delete(`${this.BASE_URL}/reservation/${id}`, {
      responseType: 'text',
    });
  }
}

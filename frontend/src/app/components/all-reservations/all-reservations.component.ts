import { Component, OnInit } from '@angular/core';
import { ReservationEntity } from 'src/app/entities/reservation-entity';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-all-reservations',
  templateUrl: './all-reservations.component.html',
  styleUrls: ['./all-reservations.component.scss'],
})
export class AllReservationsComponent implements OnInit {
  displayedColumns = ['roomName', 'reserveFrom', 'reserveTo', 'delete'];
  reservations?: ReservationEntity[];

  constructor(private reservationService: ReservationService) {}
  ngOnInit(): void {
    this.refreshReservations();
  }

  refreshReservations() {
    this.reservationService
      .allReservations()
      .subscribe((r) => (this.reservations = r));
  }

  delete(id: number) {
    this.reservationService.removeReservation(id).subscribe((_) => {
      this.refreshReservations();
    });
  }
}

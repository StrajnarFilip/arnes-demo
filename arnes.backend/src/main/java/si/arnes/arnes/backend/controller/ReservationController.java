package si.arnes.arnes.backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import si.arnes.arnes.backend.entity.Reservation;
import si.arnes.arnes.backend.service.ReservationService;

@RestController
public class ReservationController {
  @Autowired private ReservationService reservationService;

  @GetMapping("/reservations")
  public List<Reservation> allReservations() {
    return this.reservationService.allReservations();
  }

  @PostMapping("/reservation")
  public Long addReservation(@RequestBody Reservation reservation) {
    return this.reservationService.addReservation(reservation);
  }

  @DeleteMapping("/reservation/{id}")
  public String deleteReservation(@PathVariable(value = "id") Long reservationId) {
    this.reservationService.deleteReservation(reservationId);
    return "OK";
  }
}

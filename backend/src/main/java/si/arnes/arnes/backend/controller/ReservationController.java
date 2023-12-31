package si.arnes.arnes.backend.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import si.arnes.arnes.backend.entity.Reservation;
import si.arnes.arnes.backend.service.ReservationService;

@RestController
@CrossOrigin
public class ReservationController {
  @Autowired private ReservationService reservationService;

  @GetMapping("/reservations")
  public List<Reservation> allReservations() {
    return this.reservationService.allReservations();
  }

  @PostMapping("/reservation")
  public ResponseEntity<Long> addReservation(@RequestBody Reservation reservation) {
    Long reservationId = this.reservationService.addReservation(reservation);
    if (reservationId < 0) {
      return new ResponseEntity<Long>(HttpStatusCode.valueOf(400));
    }
    return new ResponseEntity<Long>(reservationId, HttpStatusCode.valueOf(200));
  }

  @DeleteMapping("/reservation/{id}")
  public String deleteReservation(@PathVariable(value = "id") Long reservationId) {
    this.reservationService.deleteReservation(reservationId);
    return "OK";
  }
}

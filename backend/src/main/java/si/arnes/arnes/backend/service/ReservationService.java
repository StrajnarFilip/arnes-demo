package si.arnes.arnes.backend.service;

import jakarta.transaction.Transactional;
import java.time.OffsetDateTime;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import si.arnes.arnes.backend.entity.Reservation;
import si.arnes.arnes.backend.repository.ReservationRepository;

@Service
public class ReservationService {
  @Autowired private ReservationRepository reservationRepository;

  public static boolean isBetween(OffsetDateTime compared, OffsetDateTime from, OffsetDateTime to) {
    return compared.isEqual(from) || (compared.isAfter(from) && compared.isBefore(to));
  }

  public static boolean overlaps(Reservation reservation1, Reservation reservation2) {
    return isBetween(
            reservation1.getReservedFrom(),
            reservation2.getReservedFrom(),
            reservation2.getReservedTo())
        || isBetween(
            reservation1.getReservedTo(),
            reservation2.getReservedFrom(),
            reservation2.getReservedTo())
        || isBetween(
            reservation2.getReservedFrom(),
            reservation1.getReservedFrom(),
            reservation1.getReservedTo())
        || isBetween(
            reservation2.getReservedTo(),
            reservation1.getReservedFrom(),
            reservation1.getReservedTo());
  }

  private boolean overlapsWithExistingReservation(Reservation reservation) {
    return allReservations().stream()
        .anyMatch(
            r -> overlaps(r, reservation) && r.getRoom().equalsIgnoreCase(reservation.getRoom()));
  }

  public List<Reservation> allReservations() {
    return reservationRepository.findAll();
  }

  @Transactional
  public Long addReservation(@RequestBody Reservation reservation) {
    if (overlapsWithExistingReservation(reservation)) {
      return -1l;
    }

    Reservation newReservation = this.reservationRepository.save(reservation);
    return newReservation.getId();
  }

  @Transactional
  public void deleteReservation(Long reservationId) {
    this.reservationRepository.deleteById(reservationId);
  }
}

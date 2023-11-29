package si.arnes.arnes.backend.repository;

import java.util.List;
import org.springframework.data.repository.Repository;
import si.arnes.arnes.backend.entity.Reservation;

public interface ReservationRepository extends Repository<Reservation, Long> {
  Reservation save(Reservation reservation);

  void deleteById(Long id);

  List<Reservation> findAll();
}

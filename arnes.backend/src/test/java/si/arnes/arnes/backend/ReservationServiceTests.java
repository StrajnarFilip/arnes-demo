package si.arnes.arnes.backend;

import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.util.Assert;
import si.arnes.arnes.backend.entity.Reservation;
import si.arnes.arnes.backend.service.ReservationService;

@SpringBootTest
class ReservationServiceTests {
  private static OffsetDateTime offsetDateTime1 =
      OffsetDateTime.of(2023, 11, 30, 5, 30, 0, 0, ZoneOffset.ofHours(1));
  private static OffsetDateTime offsetDateTime2 =
      OffsetDateTime.of(2023, 11, 30, 6, 30, 0, 0, ZoneOffset.ofHours(1));
  private static OffsetDateTime offsetDateTime3 =
      OffsetDateTime.of(2023, 11, 30, 7, 30, 0, 0, ZoneOffset.ofHours(1));
  private static OffsetDateTime offsetDateTime4 =
      OffsetDateTime.of(2023, 11, 30, 8, 30, 0, 0, ZoneOffset.ofHours(1));

  @Test
  void overlapTest1() {
    Reservation reservation1 = new Reservation(1l, "Alpha", offsetDateTime1, offsetDateTime4);
    Reservation reservation2 = new Reservation(2l, "Alpha", offsetDateTime2, offsetDateTime3);

    Assert.isTrue(ReservationService.overlaps(reservation1, reservation2), "Overlapping time.");
  }

  @Test
  void overlapTest2() {
    Reservation reservation1 = new Reservation(1l, "Alpha", offsetDateTime1, offsetDateTime3);
    Reservation reservation2 = new Reservation(2l, "Alpha", offsetDateTime2, offsetDateTime4);

    Assert.isTrue(ReservationService.overlaps(reservation1, reservation2), "Overlapping time.");
  }

  @Test
  void overlapTest3() {
    Reservation reservation1 = new Reservation(1l, "Alpha", offsetDateTime1, offsetDateTime2);
    Reservation reservation2 = new Reservation(2l, "Alpha", offsetDateTime3, offsetDateTime4);

    Assert.isTrue(
        !ReservationService.overlaps(reservation1, reservation2), "Time is not overlapping.");
  }
}

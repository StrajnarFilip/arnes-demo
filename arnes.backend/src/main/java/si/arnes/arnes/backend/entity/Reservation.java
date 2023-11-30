package si.arnes.arnes.backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.OffsetDateTime;

@Entity
public class Reservation {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @JsonProperty("roomName")
  private String room;

  @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ssZ")
  @JsonProperty("reserveFrom")
  private OffsetDateTime reservedFrom;

  @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ssZ")
  @JsonProperty("reserveTo")
  private OffsetDateTime reservedTo;

  public Long getId() {
    return id;
  }

  public String getRoom() {
    return room;
  }

  public OffsetDateTime getReservedFrom() {
    return reservedFrom;
  }

  public OffsetDateTime getReservedTo() {
    return reservedTo;
  }

  public Reservation(Long id, String room, OffsetDateTime reservedFrom, OffsetDateTime reservedTo) {
    this.id = id;
    this.room = room;
    this.reservedFrom = reservedFrom;
    this.reservedTo = reservedTo;
  }

  public Reservation() {}
}

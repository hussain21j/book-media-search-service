package bookmediasearchservice.bookmediasearchservice.dto.book;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class Items {
    String kind;
    String id;
    VolumeInfo volumeInfo;
}

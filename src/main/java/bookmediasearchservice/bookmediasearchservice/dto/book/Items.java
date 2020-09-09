package bookmediasearchservice.bookmediasearchservice.dto.book;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * <p>
 * GoogleBooKService search response POJO,
 * this POJO is used in {@link BookSearchResponse}
 * </p>
 */
@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
@AllArgsConstructor(staticName = "of")
@NoArgsConstructor
public class Items {
    String kind;
    String id;
    VolumeInfo volumeInfo;
}

package bookmediasearchservice.bookmediasearchservice.dto.book;

import bookmediasearchservice.bookmediasearchservice.converters.ProviderSearchResponse;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 * GoogleBooKService search response POJO
 * </p>
 */
@JsonIgnoreProperties(ignoreUnknown = true)
@AllArgsConstructor(staticName = "of")
@NoArgsConstructor
@Getter
@Setter
public class BookSearchResponse implements ProviderSearchResponse {
    String kind;
    int totalItems;
    List<Items> items = new ArrayList<>();
}

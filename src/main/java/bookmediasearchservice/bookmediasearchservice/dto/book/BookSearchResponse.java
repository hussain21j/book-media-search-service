package bookmediasearchservice.bookmediasearchservice.dto.book;

import bookmediasearchservice.bookmediasearchservice.converters.ProviderSearchResponse;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

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
public class BookSearchResponse implements ProviderSearchResponse {
    String kind;
    int totalItems;
    List<Items> items = new ArrayList<>();
    /**
     * mapper to transform json string to object
     */
    //todo : move this to service
    public static final ObjectReader READER = new ObjectMapper().readerFor(BookSearchResponse.class);

    public String getKind() {
        return kind;
    }

    public void setKind(String kind) {
        this.kind = kind;
    }

    public int getTotalItems() {
        return totalItems;
    }

    public void setTotalItems(int totalItems) {
        this.totalItems = totalItems;
    }

    public List<Items> getItems() {
        return items;
    }

    //todo: check this is redundant
    public void setItems(List<Items> items) {
        this.items.clear();
        if (items != null) {
            this.items.addAll(items);
        }
    }
}

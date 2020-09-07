package bookmediasearchservice.bookmediasearchservice.dto.book;

import bookmediasearchservice.bookmediasearchservice.converters.ProviderSearchResponse;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;

import java.util.ArrayList;
import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class BookSearchResponse implements ProviderSearchResponse {
   String kind;
   int totalItems;
   List<Items> items = new ArrayList<>();

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

    public void setItems(List<Items> items) {
        this.items.clear();
        if (items != null) {
            this.items.addAll(items);
        }
    }
}

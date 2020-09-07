package bookmediasearchservice.bookmediasearchservice.converters;

import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import bookmediasearchservice.bookmediasearchservice.dto.book.BookSearchResponse;

import java.util.List;

public interface ServiceConverter {
    /**
     * converts the response type of the search service provider to the type SearchResponse {@link bookmediasearchservice.bookmediasearchservice.dto.SearchResponse}
     * @param response
     * @return
     */
    public List<SearchResponse> convert(ProviderSearchResponse response);
}

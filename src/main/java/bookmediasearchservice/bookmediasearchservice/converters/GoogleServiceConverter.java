package bookmediasearchservice.bookmediasearchservice.converters;

import bookmediasearchservice.bookmediasearchservice.dto.SearchItemType;
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import bookmediasearchservice.bookmediasearchservice.dto.book.BookSearchResponse;
import bookmediasearchservice.bookmediasearchservice.dto.book.Items;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * converter for the BookSearchResponse {@link bookmediasearchservice.bookmediasearchservice.dto.book.BookSearchResponse}
 * to the SearchResponse {@link bookmediasearchservice.bookmediasearchservice.dto.SearchResponse}
 */
public class GoogleServiceConverter implements ServiceConverter {
    @Override
    public List<SearchResponse> convert(ProviderSearchResponse providerSearchResponse) {
        BookSearchResponse response = (BookSearchResponse) providerSearchResponse;
        List<SearchResponse> targetList = new ArrayList<>();
        for(Items item: response.getItems()) {
            targetList.add(SearchResponse.builder()
                    .title(item.getVolumeInfo().getTitle())
                    .type(SearchItemType.BOOK.getType())
                    .authorsOrArtists(getAuthors(item.getVolumeInfo().getAuthors()))
                    .information(item.getVolumeInfo().getDescription())
                    .build());
        }
        return targetList;
    }

    public List<String> getAuthors(List<String> writers) {
        List<String> writerList = new ArrayList<>();
        if(!Objects.isNull(writers) && writers.size() > 0) {
            writerList.addAll(writers);
        }
        return writerList;
    }
}
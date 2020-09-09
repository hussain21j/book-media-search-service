package bookmediasearchservice.bookmediasearchservice.converters;

import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import bookmediasearchservice.bookmediasearchservice.dto.book.BookSearchResponse;
import bookmediasearchservice.bookmediasearchservice.dto.book.Items;
import bookmediasearchservice.bookmediasearchservice.dto.book.VolumeInfo;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

import static org.junit.jupiter.api.Assertions.*;

class GoogleServiceConverterTest {

    @Test
    void convert_HappyFlow() {
        //Given
        GoogleServiceConverter converter = GoogleServiceConverter.of();
        VolumeInfo volumeInfo = VolumeInfo.of("A thousand splendid suns",
                "subtitle",
                Arrays.asList("khalid hosaini"),
                "publisher",
                "09-SEP-2020",
                "A story of Afghan boy",
                "url");

        List<Items> itemsList = Arrays.asList(Items.of("Book", "101", volumeInfo));

        //when
        List<SearchResponse> responses = converter.convert(getBookSearchResponseObject("Book", 1, itemsList));
        //then
        Assertions.assertThat(responses).isNotNull();
        Assertions.assertThat(responses.size()).isEqualTo(1);
    }

    @Test
    void convert_NoWriters() {
        //Given
        GoogleServiceConverter converter = GoogleServiceConverter.of();
        VolumeInfo volumeInfo = VolumeInfo.of("A thousand splendid suns",
                "subtitle",
                null,
                "publisher",
                "09-SEP-2020",
                "A story of Afghan boy",
                "url");

        List<Items> itemsList = Arrays.asList(Items.of("Book", "101", volumeInfo));

        //when
        List<SearchResponse> responses = converter.convert(getBookSearchResponseObject("Book", 1, itemsList));
        //then
        Assertions.assertThat(responses).isNotNull();
        Assertions.assertThat(responses.get(0).getAuthorsOrArtists()).isEmpty();
    }


    private BookSearchResponse getBookSearchResponseObject(String kind, int totalItems, List<Items> itemList) {
        return BookSearchResponse.of(kind, totalItems, itemList);
    }

    private Items getItemsObject(String kind, String id, VolumeInfo volumeInfo) {
        return Items.of(kind, id, volumeInfo);
    }

    private VolumeInfo getVolumeInfoObject(String title,
            String subtitle,
            List<String> authors,
            String publisher,
            String publishedDate,
            String description,
            String infoLink) {

        return VolumeInfo.of(title, subtitle, authors, publisher, publishedDate, description, infoLink);
    }
}
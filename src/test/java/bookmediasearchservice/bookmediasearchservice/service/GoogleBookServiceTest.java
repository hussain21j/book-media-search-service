package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.converters.GoogleServiceConverter;
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import org.assertj.core.api.Assertions;
import org.junit.Test;

import java.util.List;

public class GoogleBookServiceTest {
    @Test
    public void searchBooks_HappyFlow() {
        GoogleBookService googleBookService = new GoogleBookService(new GoogleServiceConverter());
        List<SearchResponse> responses = googleBookService.search("java complete reference");
        Assertions.assertThat(responses).isNotNull();
        Assertions.assertThat(responses.size()).isGreaterThan(0);
    }
}
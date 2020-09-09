package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.converters.GoogleServiceConverter;
import bookmediasearchservice.bookmediasearchservice.converters.ITunerServiceConverter;
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class SearchProcessorTest {
    @Test
    public void processSearch_HappyFlow() {
        //given
        int resultLimit=5;
        String iTuneEndpoint= "https://itunes.apple.com/search?";
        String googleBookEndpoint= "https://www.googleapis.com/books/v1/volumes?";

        List<SearchService> services = Arrays.asList(GoogleBookService.of(
                GoogleServiceConverter.of(),
                        googleBookEndpoint,
                        resultLimit),
                new ITuneService(new ITunerServiceConverter(),
                        iTuneEndpoint,
                        resultLimit));
        SearchProcessor processor = SearchProcessor.of(services, "hello world");
        //when
        List<SearchResponse> searchResponses = processor.processSearch();
        //then
        Assertions.assertThat(searchResponses).isNotNull();
        Assertions.assertThat(searchResponses.size()).isEqualTo(10);
    }

    @Test
    public void processSearch_withOneIncorrectUrl() {
        //given
        int resultLimit=5;
        String wrongITuneEndpoint= "https://itunes.appplee.com.xyz/search?";
        String googleBookEndpoint= "https://www.googleapis.com/books/v1/volumes?";

        List<SearchService> services = Arrays.asList(GoogleBookService.of(
                        GoogleServiceConverter.of(),
                        googleBookEndpoint,
                        resultLimit),
                new ITuneService(new ITunerServiceConverter(),
                        wrongITuneEndpoint,
                        resultLimit));
        SearchProcessor processor = SearchProcessor.of(services, "hello world");
        //when
        List<SearchResponse> searchResponses = processor.processSearch();
        //then
        Assertions.assertThat(searchResponses).isNotNull();
        Assertions.assertThat(searchResponses.size()).isEqualTo(5);
    }

}
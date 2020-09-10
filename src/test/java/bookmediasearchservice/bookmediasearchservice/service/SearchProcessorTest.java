package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.converters.GoogleServiceConverter;
import bookmediasearchservice.bookmediasearchservice.converters.ITunerServiceConverter;
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

class SearchProcessorTest {
    @Test
    public void processSearch_HappyFlow() {
        //given
        int resultLimit = 5;
        String iTuneEndpoint = "https://itunes.apple.com/search?";
        String googleBookEndpoint = "https://www.googleapis.com/books/v1/volumes?";

        List<SearchService> services = Arrays.asList(GoogleBookService.of(
                GoogleServiceConverter.of(),
                googleBookEndpoint,
                resultLimit, 1000, 1000, null),
                new ITuneService(new ITunerServiceConverter(),
                        iTuneEndpoint,
                        resultLimit, 1000, 1000, null));
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
        int resultLimit = 5;
        String wrongITuneEndpoint = "https://itunes.appplee.com.xyz/search?";
        String googleBookEndpoint = "https://www.googleapis.com/books/v1/volumes?";

        List<SearchService> services = Arrays.asList(GoogleBookService.of(
                GoogleServiceConverter.of(),
                googleBookEndpoint,
                resultLimit, 1000, 1000, null),
                new ITuneService(new ITunerServiceConverter(),
                        wrongITuneEndpoint,
                        resultLimit, 1000, 1000, null));
        SearchProcessor processor = SearchProcessor.of(services, "hello world");
        //when
        List<SearchResponse> searchResponses = processor.processSearch();
        //then
        Assertions.assertThat(searchResponses).isNotNull();
        Assertions.assertThat(searchResponses.size()).isEqualTo(5);
    }

    @Test
    public void processSearch_shouldReturnSortedObjectsOnTitle() {
        //given
        int resultLimit = 5;
        String iTuneEndpoint = "https://itunes.apple.com/search?";
        String googleBookEndpoint = "https://www.googleapis.com/books/v1/volumes?";

        List<SearchService> services = Arrays.asList(GoogleBookService.of(
                GoogleServiceConverter.of(),
                googleBookEndpoint,
                resultLimit, 1000, 1000, null),
                new ITuneService(new ITunerServiceConverter(),
                        iTuneEndpoint,
                        resultLimit, 1000, 1000, null));
        SearchProcessor processor = SearchProcessor.of(services, "hello world");
        //when
        List<SearchResponse> searchResponses = processor.processSearch();
        //then
        Assertions.assertThat(searchResponses).isNotNull();
        Assertions.assertThat(searchResponses.size()).isEqualTo(10);
        Assertions.assertThat(isInAlphabeticOrder(searchResponses, getSortedList(searchResponses))).isTrue();
    }

    private List<String> getSortedList(List<SearchResponse> responseList) {
        List<String> sortedList = responseList.stream().map(response -> response.getTitle()).collect(Collectors.toList());
        sortedList.sort(Comparator.naturalOrder());
        return sortedList;
    }

    private boolean isInAlphabeticOrder(List<SearchResponse> responseList, List<String> sortedTitle) {
        boolean isTitleEqual = true;
        for (int i = 0; i < responseList.size(); i++) {
            if (!responseList.get(i).getTitle().equals(sortedTitle.get(i)))
                isTitleEqual = false;
        }
        return isTitleEqual;
    }

}
package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.converters.GoogleServiceConverter;
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import bookmediasearchservice.bookmediasearchservice.util.TestTimer;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.test.util.ReflectionTestUtils;

import java.util.List;

public class GoogleBookServiceTest {
    @Test
    public void searchBooks_HappyFlow() {
        //given
        String url = "https://www.googleapis.com/books/v1/volumes?";
        int searchResultCount = 5;

        GoogleBookService service = GoogleBookService.of(GoogleServiceConverter.of(), url, searchResultCount, 1000, 1000, null);
        GoogleBookService serviceSpy = Mockito.spy(service);
        Mockito.doReturn(new TestTimer()).when(serviceSpy).getTimer();
        ReflectionTestUtils.setField(serviceSpy, "apiEndpoint", url);
        ReflectionTestUtils.setField(serviceSpy, "resultCount", searchResultCount);
        //when
        List<SearchResponse> responses = serviceSpy.search("java complete reference");
        //then
        Assertions.assertThat(responses).isNotNull();
        Assertions.assertThat(responses.size()).isGreaterThan(0);
        Assertions.assertThat(responses.size()).isEqualTo(5);
    }

    @Test
    public void searchBooks_WrongURL() {
        //given
        String url = "https://www.gooogleeeapis.com/books/v1/volumes?";
        int searchResultCount = 5;

        GoogleBookService service = GoogleBookService.of(GoogleServiceConverter.of(), url, searchResultCount, 1000, 1000, null);
        GoogleBookService serviceSpy = Mockito.spy(service);
        Mockito.doReturn(new TestTimer()).when(serviceSpy).getTimer();

        ReflectionTestUtils.setField(service, "apiEndpoint", url);
        ReflectionTestUtils.setField(service, "resultCount", searchResultCount);
        List<SearchResponse> responses = serviceSpy.search("java complete reference");
        Assertions.assertThat(responses).isNotNull();
        Assertions.assertThat(responses).isEmpty();
    }

    @Test
    public void shouldGetEmptyListResponseAsTimeOut() {
        //given
        String url = "https://www.googleapis.com/books/v1/volumes?";
        int searchResultCount = 5;

        GoogleBookService service = GoogleBookService.of(GoogleServiceConverter.of(),
                url,
                searchResultCount,
                1,
                1, null);
        GoogleBookService serviceSpy = Mockito.spy(service);
        Mockito.doReturn(new TestTimer()).when(serviceSpy).getTimer();

        ReflectionTestUtils.setField(serviceSpy, "apiEndpoint", url);
        ReflectionTestUtils.setField(serviceSpy, "resultCount", searchResultCount);
        //when
        List<SearchResponse> responses = serviceSpy.search("java complete reference");
        //then
        Assertions.assertThat(responses).isNotNull();
        Assertions.assertThat(responses).isEmpty();
    }
}
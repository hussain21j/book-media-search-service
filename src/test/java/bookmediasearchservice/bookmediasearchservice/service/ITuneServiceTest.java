package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.converters.ITunerServiceConverter;
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import bookmediasearchservice.bookmediasearchservice.util.TestMeterRegistry;
import bookmediasearchservice.bookmediasearchservice.util.TestTimer;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.test.util.ReflectionTestUtils;

import java.util.List;


public class ITuneServiceTest {

    @Test
    public void searchMusic_HappyFlow() {
        //given
        String url = "https://itunes.apple.com/search?";
        int searchResultCount = 5;

        ITuneService service = new ITuneService(new ITunerServiceConverter(), url, searchResultCount, 1000, 1000, new TestMeterRegistry());
        ITuneService serviceSpy = Mockito.spy(service);
        Mockito.doReturn(new TestTimer()).when(serviceSpy).getTimer();

        ReflectionTestUtils.setField(serviceSpy, "apiEndpoint", url);
        ReflectionTestUtils.setField(serviceSpy, "resultCount", searchResultCount);
        //when
        List<SearchResponse> responses = serviceSpy.search("Hello world");
        //then
        Assertions.assertThat(responses).isNotNull();
        Assertions.assertThat(responses.size()).isEqualTo(5);
    }

    @Test
    public void searchMusic_WrongURL() {
        //given
        String url = "https://itunes.appplee.com/search?";
        int searchResultCount = 5;

        ITuneService service = new ITuneService(new ITunerServiceConverter(), url, searchResultCount, 1000, 1000, new TestMeterRegistry());
        ITuneService serviceSpy = Mockito.spy(service);
        Mockito.doReturn(new TestTimer()).when(serviceSpy).getTimer();

        ReflectionTestUtils.setField(serviceSpy, "apiEndpoint", url);
        ReflectionTestUtils.setField(serviceSpy, "resultCount", searchResultCount);
        //when
        List<SearchResponse> responses = serviceSpy.search("42 mile stone");
        //then
        Assertions.assertThat(responses).isNotNull();
        Assertions.assertThat(responses).isEmpty();
    }

    @Test
    public void searchMusic_ShouldNotTimeOut() {
        //given
        String url = "https://itunes.apple.com/search?";
        int searchResultCount = 5;

        ITuneService service = new ITuneService(new ITunerServiceConverter(), url, searchResultCount, 1000, 1000, new TestMeterRegistry());
        ITuneService serviceSpy = Mockito.spy(service);
        Mockito.doReturn(new TestTimer()).when(serviceSpy).getTimer();

        ReflectionTestUtils.setField(serviceSpy, "apiEndpoint", url);
        ReflectionTestUtils.setField(serviceSpy, "resultCount", searchResultCount);
        //when
        List<SearchResponse> responses = serviceSpy.search("Hello world");
        //then
        Assertions.assertThat(responses).isNotNull();
        Assertions.assertThat(responses.size()).isEqualTo(5);
    }
}
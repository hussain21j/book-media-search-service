package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.converters.ITunerServiceConverter;
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.springframework.test.util.ReflectionTestUtils;

import java.util.List;


public class ItuneServiceTest {

    @Test
    public void searchMusic_HappyFlow() {
        //given
        String url = "https://itunes.apple.com/search?";
        int searchResultCount = 5;
        ITuneService service = new ITuneService(new ITunerServiceConverter(), url, searchResultCount);
        ReflectionTestUtils.setField(service, "apiEndpoint", url);
        ReflectionTestUtils.setField(service, "resultCount", searchResultCount);
        //when
        List<SearchResponse>  responses =  service.search("i love you");
        //then
        Assertions.assertThat(responses).isNotNull();
        Assertions.assertThat(responses.size()).isEqualTo(5);
    }



}
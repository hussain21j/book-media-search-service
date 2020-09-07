package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.converters.ITunerServiceConverter;
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import org.assertj.core.api.Assertions;
import org.junit.Test;

import java.util.List;


public class ItuneServiceTest {
    /**
     * Find podcast Uhh Yeah Dude
     */
    @Test
    public void searchMusic_HappyFlow() {
        ItuneService service = new ItuneService(new ITunerServiceConverter());
        List<SearchResponse>  responses =  service.search("i love you");
        Assertions.assertThat(responses).isNotNull();
        Assertions.assertThat(responses.size()).isGreaterThan(0);
    }



}
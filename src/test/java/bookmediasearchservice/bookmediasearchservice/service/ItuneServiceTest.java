package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.dto.Media;
import bookmediasearchservice.bookmediasearchservice.dto.Response;
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import bookmediasearchservice.bookmediasearchservice.http.URLConnector;
import org.assertj.core.api.Assertions;
import org.junit.Test;

import java.io.IOException;
import java.util.List;


public class ItuneServiceTest {
    /**
     * Find podcast Uhh Yeah Dude
     */
    @Test
    public void searchMusic_HappyFlow() {
        ItuneService service = new ItuneService();
        List<SearchResponse>  responses =  service.search("i love you");
        Assertions.assertThat(responses).isNotNull();
        Assertions.assertThat(responses.size()).isGreaterThan(0);
    }



}
package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.converters.GoogleServiceConverter;
import bookmediasearchservice.bookmediasearchservice.converters.ITunerServiceConverter;
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
@Slf4j
public class SearchingService {
    @Value("${count.search.result}")
    int searchCount;

    @Value("${google.book.search.service.endpoint}")
    String googleBookServiceUrl;

    @Value("${iTune,search.service.endpoint}")
    String iTuneServiceUrl;

    public List<SearchResponse> searchMedia(String name) {
        log.info("searchCount :"+searchCount);

        GoogleBookService googleBookService = new GoogleBookService(new GoogleServiceConverter(), googleBookServiceUrl, searchCount);
        ITuneService ituneService = new ITuneService(new ITunerServiceConverter(), iTuneServiceUrl, searchCount);
        List<SearchService> searchServices = Arrays.asList(googleBookService, ituneService);

        SearchProcessor processor = new SearchProcessor(searchServices, name);

        return processor.processSearch();

    }

}

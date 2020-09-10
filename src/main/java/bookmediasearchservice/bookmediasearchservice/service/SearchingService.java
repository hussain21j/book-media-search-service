package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.converters.GoogleServiceConverter;
import bookmediasearchservice.bookmediasearchservice.converters.ITunerServiceConverter;
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import io.micrometer.core.instrument.MeterRegistry;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
@Slf4j
public class SearchingService {
    @Value("${count.search.result}")
    private int searchCount;

    @Value("${google.book.search.service.endpoint}")
    private String googleBookServiceUrl;

    @Value("${iTune,search.service.endpoint}")
    private String iTuneServiceUrl;

    @Value("${service.connection.time.out}")
    private int connectionTimeOut;

    @Value("${service.read.time.out}")
    private int readTimeOut;

    @Autowired
    MeterRegistry meterRegistry;


    public List<SearchResponse> searchMedia(String name) {
        GoogleBookService googleBookService = GoogleBookService.of(GoogleServiceConverter.of(), googleBookServiceUrl, searchCount, connectionTimeOut, readTimeOut, meterRegistry);
        ITuneService ituneService = new ITuneService(new ITunerServiceConverter(), iTuneServiceUrl, searchCount, connectionTimeOut, readTimeOut, meterRegistry);
        List<SearchService> searchServices = Arrays.asList(googleBookService, ituneService);

        SearchProcessor processor = SearchProcessor.of(searchServices, name);

        return processor.processSearch();

    }

}

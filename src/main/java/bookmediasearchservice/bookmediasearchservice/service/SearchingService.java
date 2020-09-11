package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.constants.ApplicationConstants;
import bookmediasearchservice.bookmediasearchservice.converters.GoogleServiceConverter;
import bookmediasearchservice.bookmediasearchservice.converters.ITunerServiceConverter;
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import bookmediasearchservice.bookmediasearchservice.exception.ValidationException;
import io.micrometer.core.instrument.MeterRegistry;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.util.Arrays;
import java.util.List;

import static bookmediasearchservice.bookmediasearchservice.constants.ApplicationConstants.DEFAULT_SEARCH_COUNT;

@Service
@Slf4j
@Validated
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
        validateAndSetDefault();
        GoogleBookService googleBookService = GoogleBookService.of(GoogleServiceConverter.of(), googleBookServiceUrl, searchCount, connectionTimeOut, readTimeOut, meterRegistry);
        ITuneService ituneService = new ITuneService(new ITunerServiceConverter(), iTuneServiceUrl, searchCount, connectionTimeOut, readTimeOut, meterRegistry);
        List<SearchService> searchServices = Arrays.asList(googleBookService, ituneService);

        SearchProcessor processor = SearchProcessor.of(searchServices, name);

        return processor.processSearch();
    }

    /**
     * validates the values from the properties file, if values are empty or wrong
     * then give the default value where ever possible
     *
     * @return
     */
    private void validateAndSetDefault() {
        if (this.searchCount == 0) {
            this.searchCount = DEFAULT_SEARCH_COUNT;

        }
        if (this.googleBookServiceUrl == null || this.googleBookServiceUrl.isEmpty()) {
            throw new ValidationException("google book service url is not provided");
        }
        if (this.iTuneServiceUrl == null || this.iTuneServiceUrl.isEmpty()) {
            throw new ValidationException("iTune service url is not provided");
        }
        if (this.connectionTimeOut == 0) {
            this.connectionTimeOut = ApplicationConstants.DEFAULT_CONNECTION_TIME_OUT;
        }
        if (this.readTimeOut == 0) {
            this.readTimeOut = ApplicationConstants.DEFAULT_READ_TIME_OUT;
        }
    }

}

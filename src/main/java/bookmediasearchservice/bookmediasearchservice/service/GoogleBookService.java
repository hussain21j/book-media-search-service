package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.ApplicationConstants;
import bookmediasearchservice.bookmediasearchservice.converters.ServiceConverter;
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import bookmediasearchservice.bookmediasearchservice.dto.book.BookSearchResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.google.common.base.Stopwatch;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.net.UnknownHostException;
import java.time.Duration;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.TimeUnit;

import static bookmediasearchservice.bookmediasearchservice.ApplicationConstants.*;

@Slf4j
@AllArgsConstructor(staticName = "of")
public class GoogleBookService implements SearchService {
    private ServiceConverter serviceConverter;
    private String apiEndpoint;
    private int resultCount;

    /**
     * Search in the google book service
     * @param text
     * @return
     */
    @Override
    public List<SearchResponse> search(String text) {
        List<SearchResponse> responses;
        Stopwatch stopwatch = Stopwatch.createUnstarted().start();
        try{
            final String uri = buildURL(text);
            //todo: make this resttemplate global a bean managed class
            RestTemplate restTemplate = new RestTemplateBuilder()
                    .setConnectTimeout(Duration.ofMillis(SERVICE_CONNECTION_TIME_OUT))
                    .setReadTimeout(Duration.ofMillis(SERVICE_READ_TIME_OUT)).build();

            String result = restTemplate.getForObject(uri, String.class);
            responses = this.serviceConverter.convert(BookSearchResponse.READER.readValue(result));
        } catch (JsonProcessingException e) {
            log.error("the json response could not be parsed");
            responses = Collections.emptyList();
        } catch (RestClientException e)  {
            log.error("Response could not be received using URL {} in specified time", this.apiEndpoint);
            responses = Collections.emptyList();
        } finally {
            stopwatch.stop();
            log.info("time elapsed in search of ITune service {} millisecond", stopwatch.elapsed(TimeUnit.MILLISECONDS));
        }
        return responses;
    }

    public String buildURL(String bookName) {
        return new StringBuilder(apiEndpoint).append("q=").append(bookName.trim()).append("&&").append("maxResults="+resultCount).toString();
    }

}

package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.converters.ServiceConverter;
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import bookmediasearchservice.bookmediasearchservice.dto.book.BookSearchResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.google.common.base.Stopwatch;
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Timer;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.time.Duration;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.TimeUnit;

import static bookmediasearchservice.bookmediasearchservice.ApplicationConstants.GOOGLE_BOOK_SERVICE_METRIC;

/**
 * <p>
 * Searching service in the Google Book API
 * As mentioned in the assignment document, documentation for the iTune service in following lin
 *
 * @see <a href="https://developers.google.com/books/docs/v1/reference/volumes/list ">Google Book API</a>
 * </p>
 */
@Slf4j
@AllArgsConstructor(staticName = "of")
public class GoogleBookService implements SearchService {
    private ServiceConverter serviceConverter;
    private String apiEndpoint;
    private int resultCount;
    private int connectionTimeOut;
    private int readTimeOut;
    private MeterRegistry meterRegistry;

    /**
     * Search in the google book service
     *
     * @param text
     * @return
     */
    @Override
    public List<SearchResponse> search(String text) {
        Timer timer = Timer.builder(GOOGLE_BOOK_SERVICE_METRIC).tag("method", "search").register(meterRegistry);
        List<SearchResponse> responses;
        Stopwatch stopwatch = Stopwatch.createUnstarted();
        try {
            final String uri = buildURL(text);
            RestTemplate restTemplate = new RestTemplateBuilder()
                    .setConnectTimeout(Duration.ofMillis(connectionTimeOut))
                    .setReadTimeout(Duration.ofMillis(readTimeOut)).build();
            stopwatch.start();
            String result = restTemplate.getForObject(uri, String.class);
            stopwatch.stop();
            responses = this.serviceConverter.convert(BookSearchResponse.READER.readValue(result));
        } catch (JsonProcessingException e) {
            log.error("the json response could not be parsed");
            e.printStackTrace();
            responses = Collections.emptyList();
        } catch (RestClientException e) {
            log.error("Response could not be received using URL {} in specified time", this.apiEndpoint);
            e.printStackTrace();
            responses = Collections.emptyList();
        } finally {
            log.info("time elapsed in search of ITune service {} millisecond", stopwatch.elapsed(TimeUnit.MILLISECONDS));
            timer.record(stopwatch.elapsed(TimeUnit.MILLISECONDS), TimeUnit.MILLISECONDS);
        }
        return responses;
    }

    /**
     * builds the complete URL
     */
    public String buildURL(String bookName) {
        return new StringBuilder(apiEndpoint).append("q=").append(bookName.trim()).append("&&").append("maxResults=" + resultCount).toString();
    }

}

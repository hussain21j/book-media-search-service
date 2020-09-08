package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.converters.ServiceConverter;
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import bookmediasearchservice.bookmediasearchservice.dto.book.BookSearchResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Slf4j
@AllArgsConstructor
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
        try{
            final String uri = buildURL(text);
            RestTemplate restTemplate = new RestTemplate();

            String result = restTemplate.getForObject(uri, String.class);
            log.info(result);
            return this.serviceConverter.convert(BookSearchResponse.READER.readValue(result));
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    public String buildURL(String bookName) {
        return new StringBuilder(apiEndpoint).append("q=").append(bookName.trim()).append("&&").append("maxResults="+resultCount).toString();
    }

}

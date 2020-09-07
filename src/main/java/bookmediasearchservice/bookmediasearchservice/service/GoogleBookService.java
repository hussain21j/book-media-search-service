package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.converters.ServiceConverter;
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import bookmediasearchservice.bookmediasearchservice.dto.book.BookSearchResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Slf4j
public class GoogleBookService implements SearchService {
    private static final String API_ENDPOINT = "https://www.googleapis.com/books/v1/volumes?";
    private ServiceConverter serviceConverter;

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

    GoogleBookService(ServiceConverter serviceConverter) {
        this.serviceConverter = serviceConverter;
    }



    public String buildURL(String bookName) {
        return new StringBuilder(API_ENDPOINT).append("q=").append(bookName.trim()).append("&&").append("maxResults=5").toString();
    }

    /**
     * Converts the iTune Response to the SearchResponse
     */
   /* public List<SearchResponse> converter(BookSearchResponse response) {
        List<SearchResponse> targetList = new ArrayList<>();
        for(Items item: response.getItems()) {
            targetList.add(SearchResponse.builder()
                    .title(item.getVolumeInfo().getTitle())
                    .type(SearchItemType.BOOK.getType())
                    .authorsOrArtists(getAuthors(item.getVolumeInfo().getAuthors()))
                    .information(item.getVolumeInfo().getDescription())
                    .build());
        }
        return targetList;
    }

    public List<String> getAuthors(List<String> writers) {
        List<String> writerList = new ArrayList<>();
        if(!Objects.isNull(writers) && writers.size() > 0) {
            writerList.addAll(writers);
        }
        return writerList;
    }*/



}

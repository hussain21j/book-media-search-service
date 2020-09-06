package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.dto.Response;
import bookmediasearchservice.bookmediasearchservice.dto.Result;
import bookmediasearchservice.bookmediasearchservice.dto.SearchItemType;
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import bookmediasearchservice.bookmediasearchservice.dto.book.BookSearchResponse;
import bookmediasearchservice.bookmediasearchservice.dto.book.Items;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

@Service
@Slf4j
public class GoogleBookService {
    private static final String API_ENDPOINT = "https://www.googleapis.com/books/v1/volumes?";

    public List<SearchResponse> search(String bookName)
    {
        try{
            final String uri = buildURL(bookName);
            RestTemplate restTemplate = new RestTemplate();

            String result = restTemplate.getForObject(uri, String.class);
            log.info(result);
            return converter(BookSearchResponse.READER.readValue(result));
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    public String buildURL(String bookName) {
        return new StringBuilder(API_ENDPOINT).append("q=").append(bookName.trim()).append("&&").append("maxResults=5").toString();
    }

    /**
     * Converts the iTune Response to the SearchResponse
     */
    public List<SearchResponse> converter(BookSearchResponse response) {
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
    }


}

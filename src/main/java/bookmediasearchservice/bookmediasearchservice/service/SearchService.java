package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;

import java.util.List;

public interface SearchService {
    /**
     * searches the text in the service provider
     *
     * @param text
     * @return
     */
    public List<SearchResponse> search(String text);
}

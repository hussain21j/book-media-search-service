package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import lombok.AllArgsConstructor;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

/**
 * <p>
 * makes the search in all the searching services provided
 * </p>
 */
@AllArgsConstructor(staticName = "of")
public class SearchProcessor {
    List<SearchService> searchServices;
    String textToSearch;

    /**
     * Makes the search in all the search providers , and sort the result
     *
     * @return
     */
    public List<SearchResponse> processSearch() {
        ArrayList<SearchResponse> responses = new ArrayList<>();
        //todo: try parllel stream
        searchServices.forEach(searchService -> {
            responses.addAll(searchService.search(textToSearch));
        });

        responses.sort(Comparator.comparing(response -> response.getTitle()));
        return responses;
    }
}

package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import lombok.AllArgsConstructor;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

/**
 * <p>
 * The search process is the search engine
 * All the search services to be searched is passed in one list.
 * so in future as many services can be as desired, the engine will make search on all these services
 * collects the results , sort these and return the final sorted search result list
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
        searchServices.forEach(searchService -> {
            responses.addAll(searchService.search(textToSearch));
        });

        responses.sort(Comparator.comparing(response -> response.getTitle()));
        return responses;
    }
}

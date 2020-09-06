package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class SearchAggregator {
    public List<SearchResponse> aggregateSearch(List<SearchResponse> r1, List<SearchResponse> r2) {
        //join the searches into one and send response
        List<SearchResponse> aggregatedList = new ArrayList<>();
        for(SearchResponse response: r1) {
            aggregatedList.add(response);
        }

        for(SearchResponse response: r2) {
            aggregatedList.add(response);
        }

        aggregatedList.sort(Comparator.comparing(a -> a.getTitle(), Comparator.nullsLast(Comparator.naturalOrder())));


        return aggregatedList;

    }
}

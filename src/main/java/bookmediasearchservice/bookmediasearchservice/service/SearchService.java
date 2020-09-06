package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.dto.Media;
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
public class SearchService {
    @Autowired
    GoogleBookService bookService;
    @Autowired
    ItuneService ituneService;

    public List<SearchResponse> searchMedia(String name) {
        ArrayList<SearchResponse> responses = new ArrayList<>();
        responses.addAll(bookService.search(name));
        responses.addAll(ituneService.search(name));
        responses.sort(Comparator.comparing(response -> response.getTitle()));
        return responses;
    }
}

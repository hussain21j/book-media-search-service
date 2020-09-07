package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.converters.GoogleServiceConverter;
import bookmediasearchservice.bookmediasearchservice.converters.ITunerServiceConverter;
import bookmediasearchservice.bookmediasearchservice.dto.Media;
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Service
public class SearchingService {

    public List<SearchResponse> searchMedia(String name) {
        ArrayList<SearchResponse> responses = new ArrayList<>();


        GoogleBookService googleBookService = new GoogleBookService(new GoogleServiceConverter());
        ItuneService ituneService = new ItuneService(new ITunerServiceConverter());

        responses.addAll(googleBookService.search(name));
        responses.addAll(ituneService.search(name));
        responses.sort(Comparator.comparing(response -> response.getTitle()));
        return responses;
    }
}

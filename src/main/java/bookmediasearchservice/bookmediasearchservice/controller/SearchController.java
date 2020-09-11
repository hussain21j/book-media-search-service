package bookmediasearchservice.bookmediasearchservice.controller;


import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import bookmediasearchservice.bookmediasearchservice.service.SearchingService;
import io.micrometer.core.annotation.Timed;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/**
 * <p>
 * The controller for the search services
 * </p>
 */
@RestController
@RequestMapping("searchservice")
@Slf4j
@Timed("SearchController")
public class SearchController {

    @Autowired
    SearchingService searchingService;

    @CrossOrigin
    @GetMapping(value = "/search", produces = "application/json")
    public List<SearchResponse> makeSearch(@RequestParam(required = true) String text) {
        log.info("text to be searched  :" + text);
        List<SearchResponse> responseList = searchingService.searchMedia(text);
        return responseList;
    }
}

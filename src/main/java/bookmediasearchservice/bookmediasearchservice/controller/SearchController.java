package bookmediasearchservice.bookmediasearchservice.controller;


import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import bookmediasearchservice.bookmediasearchservice.service.SearchingService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/**
 * The controller for the application
 *
 * @author Tayab Hussain
 */
@RestController
@RequestMapping("searchservice")
@Slf4j
public class SearchController {

    @Autowired
    SearchingService searchingService;

    @CrossOrigin
    @GetMapping(value = "/search", produces = "application/json")
    public List<SearchResponse> getAllMessages(@RequestParam(required = true) String name) {
        log.info("name passed is :"+name);
        List<SearchResponse> responseList=  searchingService.searchMedia(name);
        return responseList;
    }
}

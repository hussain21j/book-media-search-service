package bookmediasearchservice.bookmediasearchservice.controller;


import bookmediasearchservice.bookmediasearchservice.service.GoogleBookService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


/**
 * The controller for the application
 *
 * @author Tayab Hussain
 */
@Controller
@Slf4j
public class SearchController {

    @Autowired
    GoogleBookService bookService;

    @CrossOrigin
    @GetMapping("search")
    public ResponseEntity getAllMessages(@RequestParam(required = true) String name) {
        log.info("name passed is :"+name);
        bookService.getBooks();
        String x = new String("OK");
        return new ResponseEntity(x, HttpStatus.OK);
    }
}

package bookmediasearchservice.bookmediasearchservice;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;


/**
 * The controller for the application
 *
 * @author Tayab Hussain
 */
@Controller
@Slf4j
public class ChatController {

    @CrossOrigin
    @GetMapping("history")
    public ResponseEntity getAllMessages() {
        String x = new String("OK");
        return new ResponseEntity(x, HttpStatus.OK);
    }
}

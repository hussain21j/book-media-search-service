package bookmediasearchservice.bookmediasearchservice.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GoogleBookService {
    public void getBooks()
    {
        final String uri = "https://www.googleapis.com/books/v1/volumes?q=codility&&maxResults=5";
        //TODO: Autowire the RestTemplate in all the examples
        RestTemplate restTemplate = new RestTemplate();

        String result = restTemplate.getForObject(uri, String.class);
        System.out.println(result);
    }
}

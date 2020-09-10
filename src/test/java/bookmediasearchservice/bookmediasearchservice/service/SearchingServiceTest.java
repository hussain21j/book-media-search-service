package bookmediasearchservice.bookmediasearchservice.service;

import bookmediasearchservice.bookmediasearchservice.BookMediaSearchServiceApplication;
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.util.ReflectionTestUtils;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = {BookMediaSearchServiceApplication.class})
class SearchingServiceTest {
    @Autowired
    SearchingService searchingService;

    @Test
    public void searchMedia_HappyFlow() {
        //given
        //when
        List<SearchResponse> responses=  searchingService.searchMedia("hello world");
        //then
        Assertions.assertThat(responses).isNotNull();
        Assertions.assertThat(responses).hasSize(10);
    }
}
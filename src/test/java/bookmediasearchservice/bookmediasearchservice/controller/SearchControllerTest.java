package bookmediasearchservice.bookmediasearchservice.controller;

import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import bookmediasearchservice.bookmediasearchservice.dto.itune.SearchItemType;
import bookmediasearchservice.bookmediasearchservice.service.SearchingService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Arrays;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = SearchController.class)
class SearchControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    SearchingService searchingService;

    @Test
    public void healthCheck_HappyFlow() throws Exception {
        //given
        Mockito.when(searchingService.searchMedia(Mockito.any())).thenReturn(Arrays.asList(getSearchResponse()));
        //when
        MvcResult mvcResult = this.mockMvc.perform(MockMvcRequestBuilders
                .get("/searchservice/search")
                .param("text", "hello world")
                .contentType(MediaType.APPLICATION_JSON_UTF8))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();
        //then
        Assertions.assertThat(mvcResult.getResponse().getContentAsString()).contains("artist-1");
    }

    @Test
    public void whenNoParam_thenBadRequest() throws Exception {
        //given
        Mockito.when(searchingService.searchMedia(Mockito.any())).thenReturn(Arrays.asList(getSearchResponse()));
        //then
        this.mockMvc.perform(MockMvcRequestBuilders.get("/searchservice/search"))
                .andExpect(MockMvcResultMatchers.status().isBadRequest());
    }

    private SearchResponse getSearchResponse() {
        return SearchResponse.builder()
                .title("title")
                .type(SearchItemType.BOOK)
                .authorsOrArtists(Arrays.asList("artist-1"))
                .information("info")
                .build();
    }

}
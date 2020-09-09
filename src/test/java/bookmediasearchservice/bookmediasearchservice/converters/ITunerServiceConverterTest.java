package bookmediasearchservice.bookmediasearchservice.converters;

import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import bookmediasearchservice.bookmediasearchservice.dto.itune.ITuneSearchResponse;
import bookmediasearchservice.bookmediasearchservice.dto.itune.Result;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class ITunerServiceConverterTest {
    @Test
    public void convert_HappyFlow() {
        //given
        List<Result> results = Arrays.asList(getResultObject("the way i am", "eminem", "the way i am"));
        ITuneSearchResponse iTuneSearchResponse = getITuneSearchResponseObject(1, results);
        ITunerServiceConverter iTunerServiceConverter= new ITunerServiceConverter();
        //when
        List<SearchResponse> responses = iTunerServiceConverter.convert(iTuneSearchResponse);
        //then
        Assertions.assertThat(responses).isNotNull();
        Assertions.assertThat(responses).hasSize(1);
    }

    @Test
    public void convert_NoArtist() {
        //given
        List<Result> results = Arrays.asList(getResultObject("the way i am", null, "the way i am"));
        ITuneSearchResponse iTuneSearchResponse = getITuneSearchResponseObject(1, results);
        ITunerServiceConverter iTunerServiceConverter= new ITunerServiceConverter();
        //when
        List<SearchResponse> responses = iTunerServiceConverter.convert(iTuneSearchResponse);
        //then
        Assertions.assertThat(responses).isNotNull();
        Assertions.assertThat(responses).hasSize(1);
        Assertions.assertThat(responses.get(0).getAuthorsOrArtists()).isEmpty();
    }

    private ITuneSearchResponse getITuneSearchResponseObject(int resultCount, List<Result> results) {
        ITuneSearchResponse iTuneSearchResponse = new ITuneSearchResponse();
        iTuneSearchResponse.setResultCount(resultCount);
        iTuneSearchResponse.setResults(results);

        return iTuneSearchResponse;
    }

    private Result getResultObject(String trackName, String artistName, String collectionName) {
        Result result = new Result();
        result.setTrackName(trackName);
        result.setArtistName(artistName);
        result.setCollectionName(collectionName);

        return result;
    }
}
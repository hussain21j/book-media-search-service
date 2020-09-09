package bookmediasearchservice.bookmediasearchservice.converters;

import bookmediasearchservice.bookmediasearchservice.dto.itune.ITuneSearchResponse;
import bookmediasearchservice.bookmediasearchservice.dto.itune.Result;
import bookmediasearchservice.bookmediasearchservice.dto.itune.SearchItemType;
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;

/**
 * converter for the ITuneSearchResponse {@link ITuneSearchResponse}
 * to the SearchResponse {@link bookmediasearchservice.bookmediasearchservice.dto.SearchResponse}
 */
public class ITunerServiceConverter implements ServiceConverter {
    @Override
    public List<SearchResponse> convert(ProviderSearchResponse providerSearchResponse) {
        ITuneSearchResponse response = (ITuneSearchResponse) providerSearchResponse;
        List<SearchResponse> targetList = new ArrayList<>();
        for(Result result: response.getResults()) {
            targetList.add(SearchResponse.builder()
                    .title(result.getTrackName())
                    .type(SearchItemType.ALBUM.getType())
                    .authorsOrArtists(getArtists(result.getArtistName()))
                    .information(result.getCollectionName())
                    .build());
        }
        return targetList;
    }

    public List<String> getArtists(String artist) {
        List<String> artists = new ArrayList<>();
        if(!Objects.isNull(artist))
            artists.add(artist);
        return artists;
    }
}

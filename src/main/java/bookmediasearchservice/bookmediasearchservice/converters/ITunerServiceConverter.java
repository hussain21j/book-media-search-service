package bookmediasearchservice.bookmediasearchservice.converters;

import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import bookmediasearchservice.bookmediasearchservice.dto.itune.ITuneSearchResponse;
import bookmediasearchservice.bookmediasearchservice.dto.itune.Result;
import bookmediasearchservice.bookmediasearchservice.dto.itune.SearchItemType;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

/**
 * <p>
 * converter for the ITuneSearchResponse {@link ITuneSearchResponse}
 * to the SearchResponse {@link bookmediasearchservice.bookmediasearchservice.dto.SearchResponse}
 * </p>
 */
public class ITunerServiceConverter implements ServiceConverter {
    @Override
    public List<SearchResponse> convert(ProviderSearchResponse providerSearchResponse) {
        ITuneSearchResponse response = (ITuneSearchResponse) providerSearchResponse;
        List<SearchResponse> targetList = new ArrayList<>();
        for (Result result : response.getResults()) {
            targetList.add(SearchResponse.builder()
                    .title(result.getTrackName())
                    .type(SearchItemType.ALBUM)
                    .authorsOrArtists(getArtists(result.getArtistName()))
                    .build());
        }
        return targetList;
    }

    public List<String> getArtists(String artist) {
        List<String> artists = new ArrayList<>();
        if (!Objects.isNull(artist))
            artists.add(artist);
        return artists;
    }
}

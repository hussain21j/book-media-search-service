package bookmediasearchservice.bookmediasearchservice.dto;

import bookmediasearchservice.bookmediasearchservice.dto.itune.SearchItemType;
import lombok.*;

import java.util.List;

/**
 * <p>
 * The response POJO used by the main service
 * </p>
 * <p>
 * The search output objects found from all the search providers,  for example
 * {@link bookmediasearchservice.bookmediasearchservice.service.ITuneService} and
 * {@link bookmediasearchservice.bookmediasearchservice.service.GoogleBookService}
 * are converted to SearchResponse Object
 * </p>
 */
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SearchResponse {
    String title;
    SearchItemType type;
    List<String> authorsOrArtists;
}

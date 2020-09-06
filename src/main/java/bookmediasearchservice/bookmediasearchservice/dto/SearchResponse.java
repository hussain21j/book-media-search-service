package bookmediasearchservice.bookmediasearchservice.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SearchResponse {
    String title;
    String type;
    List<String> authorsOrArtists;
    String information;
}

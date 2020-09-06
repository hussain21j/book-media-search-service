package bookmediasearchservice.bookmediasearchservice.dto.book;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class VolumeInfo {
    String title;
    String subtitle;
    List<String> authors;
    String publisher;
    String publishedDate;
    String description;
    String infoLink;
}


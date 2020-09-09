package bookmediasearchservice.bookmediasearchservice.dto.book;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
@AllArgsConstructor(staticName = "of")
@NoArgsConstructor
public class VolumeInfo {
    String title;
    String subtitle;
    List<String> authors;
    String publisher;
    String publishedDate;
    String description;
    String infoLink;
}


/*
	Copyright 2020 Marceau Dewilde <m@ceau.be>
	
	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at
	
		https://www.apache.org/licenses/LICENSE-2.0
	
	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/
package bookmediasearchservice.bookmediasearchservice.dto.itune;

import bookmediasearchservice.bookmediasearchservice.dto.itune.ITuneSearchResponse;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

/**
 * <p>Single result POJO of Itune search used in outer POJO of iTunes {@link ITuneSearchResponse}.</p>
 */
@JsonIgnoreProperties(ignoreUnknown = true)
@Getter
@Setter
public class Result {

	/**
	 * The name of the object returned by the search request.
	 * @return track, collection, artist
	 */
	private String wrapperType;

	/**
	 * The kind of content returned by the search request.
	 *
	 * @return book, album, coached-audio, feature-movie, interactive- booklet,
	 *         music-video, pdf podcast, podcast-episode, software-package,
	 *         song, tv-episode, artist
	 */
	private String kind;

	private Long artistId;
	private Long collectionId;
	private Long trackId;
	private String bundleId;

	private String artistName;
	private String collectionName;
	private String trackName;

	private String collectionCensoredName;
	private String trackCensoredName;

	private String artistViewUrl;
	private String collectionViewUrl;
	private String trackViewUrl;
	private String feedUrl;
	private String previewUrl;

	private String artworkUrl30;
	private String artworkUrl60;
	private String artworkUrl100;
	private String artworkUrl512;
	private String artworkUrl600;

	private BigDecimal price;
	private BigDecimal collectionPrice;
	private BigDecimal trackPrice;
	private BigDecimal trackRentalPrice;
	private BigDecimal collectionHdPrice;
	private BigDecimal trackHdPrice;
	private BigDecimal trackHdRentalPrice;
	private String formattedPrice;

	private String releaseDate;

	private String collectionExplicitness;
	private String trackExplicitness;

	private Integer discCount;
	private Integer discNumber;

	private Integer trackCount;
	private Integer trackNumber;

	private String copyright;

	private Long trackTimeMillis;

	private String country;
	private String currency;

	private String primaryGenreId;
	private String primaryGenreName;

	private Boolean isStreamable;

}

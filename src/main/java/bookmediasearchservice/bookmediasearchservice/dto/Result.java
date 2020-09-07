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
package bookmediasearchservice.bookmediasearchservice.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.math.BigDecimal;

/**
 * Single result in an iTunes {@link ITuneSearchResponse}.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Result {


	private String wrapperType;
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



	/**
	 * The name of the object returned by the search request.
	 * 
	 * @return track, collection, artist
	 */
	public String getWrapperType() {
		return wrapperType;
	}

	public void setWrapperType(String wrapperType) {
		this.wrapperType = wrapperType;
	}

	/**
	 * The kind of content returned by the search request.
	 * 
	 * @return book, album, coached-audio, feature-movie, interactive- booklet,
	 *         music-video, pdf podcast, podcast-episode, software-package,
	 *         song, tv-episode, artist
	 */
	public String getKind() {
		return kind;
	}

	public void setKind(String kind) {
		this.kind = kind;
	}

	public Long getArtistId() {
		return artistId;
	}

	public void setArtistId(Long artistId) {
		this.artistId = artistId;
	}

	public Long getCollectionId() {
		return collectionId;
	}

	public void setCollectionId(Long collectionId) {
		this.collectionId = collectionId;
	}

	public Long getTrackId() {
		return trackId;
	}

	public void setTrackId(Long trackId) {
		this.trackId = trackId;
	}

	public String getBundleId() {
		return bundleId;
	}

	public void setBundleId(String bundleId) {
		this.bundleId = bundleId;
	}

	/**
	 * The name of the artist returned by the search request.
	 * 
	 * @return String
	 */
	public String getArtistName() {
		return artistName;
	}

	public void setArtistName(String artistName) {
		this.artistName = artistName;
	}

	public String getCollectionName() {
		return collectionName;
	}

	public void setCollectionName(String collectionName) {
		this.collectionName = collectionName;
	}

	/**
	 * The name of the track, song, video, TV episode, and so on returned by the
	 * search request.
	 * 
	 * @return String
	 */
	public String getTrackName() {
		return trackName;
	}

	public void setTrackName(String trackName) {
		this.trackName = trackName;
	}

	/**
	 * The name of the collection returned by the search request, with
	 * objectionable words *’d out.
	 * 
	 * @return String
	 */
	public String getCollectionCensoredName() {
		return collectionCensoredName;
	}

	public void setCollectionCensoredName(String collectionCensoredName) {
		this.collectionCensoredName = collectionCensoredName;
	}

	/**
	 * The name of the track returned by the search request, with objectionable
	 * words *’d out.
	 * 
	 * @return String
	 */
	public String getTrackCensoredName() {
		return trackCensoredName;
	}

	public void setTrackCensoredName(String trackCensoredName) {
		this.trackCensoredName = trackCensoredName;
	}

	/**
	 * A URL to view the artist in the iTunes Store.
	 * 
	 * @return String
	 */
	public String getArtistViewUrl() {
		return artistViewUrl;
	}

	public void setArtistViewUrl(String artistViewUrl) {
		this.artistViewUrl = artistViewUrl;
	}

	/**
	 * A URL to view the collection in the iTunes Store.
	 * 
	 * @return String
	 */
	public String getCollectionViewUrl() {
		return collectionViewUrl;
	}

	public void setCollectionViewUrl(String collectionViewUrl) {
		this.collectionViewUrl = collectionViewUrl;
	}

	/**
	 * A URL to view the track in the iTunes Store.
	 * 
	 * @return String
	 */
	public String getTrackViewUrl() {
		return trackViewUrl;
	}

	public void setTrackViewUrl(String trackViewUrl) {
		this.trackViewUrl = trackViewUrl;
	}

	/**
	 * URL of the feed if podcast.
	 * 
	 * @return String
	 */
	public String getFeedUrl() {
		return feedUrl;
	}

	public void setFeedUrl(String feedUrl) {
		this.feedUrl = feedUrl;
	}

	public String getPreviewUrl() {
		return previewUrl;
	}

	public void setPreviewUrl(String previewUrl) {
		this.previewUrl = previewUrl;
	}

	/**
	 * A URL for the artwork associated with the returned media type, sized to
	 * 30x30 pixels.
	 * 
	 * @return String
	 */
	public String getArtworkUrl30() {
		return artworkUrl30;
	}

	public void setArtworkUrl30(String artworkUrl30) {
		this.artworkUrl30 = artworkUrl30;
	}

	/**
	 * A URL for the artwork associated with the returned media type, sized to
	 * 60x60 pixels.
	 * 
	 * @return String
	 */
	public String getArtworkUrl60() {
		return artworkUrl60;
	}

	public void setArtworkUrl60(String artworkUrl60) {
		this.artworkUrl60 = artworkUrl60;
	}

	/**
	 * A URL for the artwork associated with the returned media type, sized to
	 * 100x100 pixels.
	 * 
	 * @return String
	 */
	public String getArtworkUrl100() {
		return artworkUrl100;
	}

	public void setArtworkUrl100(String artworkUrl100) {
		this.artworkUrl100 = artworkUrl100;
	}

	/**
	 * A URL for the artwork associated with the returned media type, sized to
	 * 512x512 pixels.
	 * 
	 * @return String
	 */
	public String getArtworkUrl512() {
		return artworkUrl512;
	}

	public void setArtworkUrl512(String artworkUrl512) {
		this.artworkUrl512 = artworkUrl512;
	}

	/**
	 * A URL for the artwork associated with the returned media type, sized to
	 * 600x600 pixels.
	 * 
	 * @return String
	 */
	public String getArtworkUrl600() {
		return artworkUrl600;
	}

	public void setArtworkUrl600(String artworkUrl600) {
		this.artworkUrl600 = artworkUrl600;
	}

	/**
	 * @return the URL for the largest available artwork, or {@code null} if no
	 *         artwork available
	 */
	public String getLargestArtworkUrl() {
		if (artworkUrl600 != null) {
			return artworkUrl600;
		}
		if (artworkUrl512 != null) {
			return artworkUrl512;
		}
		if (artworkUrl100 != null) {
			return artworkUrl100;
		}
		if (artworkUrl60 != null) {
			return artworkUrl60;
		}
		return artworkUrl30;
	}

	public BigDecimal getPrice() {
		return price;
	}

	public void setPrice(BigDecimal price) {
		this.price = price;
	}

	public BigDecimal getCollectionPrice() {
		return collectionPrice;
	}

	public void setCollectionPrice(BigDecimal collectionPrice) {
		this.collectionPrice = collectionPrice;
	}

	public BigDecimal getTrackPrice() {
		return trackPrice;
	}

	public void setTrackPrice(BigDecimal trackPrice) {
		this.trackPrice = trackPrice;
	}

	public BigDecimal getTrackRentalPrice() {
		return trackRentalPrice;
	}

	public void setTrackRentalPrice(BigDecimal trackRentalPrice) {
		this.trackRentalPrice = trackRentalPrice;
	}

	public BigDecimal getCollectionHdPrice() {
		return collectionHdPrice;
	}

	public void setCollectionHdPrice(BigDecimal collectionHdPrice) {
		this.collectionHdPrice = collectionHdPrice;
	}

	public BigDecimal getTrackHdPrice() {
		return trackHdPrice;
	}

	public void setTrackHdPrice(BigDecimal trackHdPrice) {
		this.trackHdPrice = trackHdPrice;
	}

	public BigDecimal getTrackHdRentalPrice() {
		return trackHdRentalPrice;
	}

	public void setTrackHdRentalPrice(BigDecimal trackHdRentalPrice) {
		this.trackHdRentalPrice = trackHdRentalPrice;
	}

	public String getFormattedPrice() {
		return formattedPrice;
	}

	public void setFormattedPrice(String formattedPrice) {
		this.formattedPrice = formattedPrice;
	}

	public String getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}

	/**
	 * The Recording Industry Association of America (RIAA) parental advisory
	 * for the collection. For more information, see <a href=
	 * "http://itunes.apple.com/WebObjects/MZStore.woa/wa/parentalAdvisory">Apple</a>.
	 * 
	 * @return "explicit" (explicit lyrics, possibly explicit album cover),
	 *         "cleaned" (explicit lyrics bleeped out), "notExplicit" (no
	 *         explicit lyrics)
	 */
	public String getCollectionExplicitness() {
		return collectionExplicitness;
	}

	public void setCollectionExplicitness(String collectionExplicitness) {
		this.collectionExplicitness = collectionExplicitness;
	}

	/**
	 * The Recording Industry Association of America (RIAA) parental advisory
	 * for the track. For more information, see <a href=
	 * "http://itunes.apple.com/WebObjects/MZStore.woa/wa/parentalAdvisory">Apple</a>.
	 * 
	 * @return "explicit" (explicit lyrics, possibly explicit album cover),
	 *         "cleaned" (explicit lyrics bleeped out), "notExplicit" (no
	 *         explicit lyrics)
	 */
	public String getTrackExplicitness() {
		return trackExplicitness;
	}

	public void setTrackExplicitness(String trackExplicitness) {
		this.trackExplicitness = trackExplicitness;
	}

	public Integer getDiscCount() {
		return discCount;
	}

	public void setDiscCount(Integer discCount) {
		this.discCount = discCount;
	}

	public Integer getDiscNumber() {
		return discNumber;
	}

	public void setDiscNumber(Integer discNumber) {
		this.discNumber = discNumber;
	}

	public Integer getTrackCount() {
		return trackCount;
	}

	public void setTrackCount(Integer trackCount) {
		this.trackCount = trackCount;
	}

	public Integer getTrackNumber() {
		return trackNumber;
	}

	public void setTrackNumber(Integer trackNumber) {
		this.trackNumber = trackNumber;
	}

	public String getCopyright() {
		return copyright;
	}

	public void setCopyright(String copyright) {
		this.copyright = copyright;
	}

	public Long getTrackTimeMillis() {
		return trackTimeMillis;
	}

	public void setTrackTimeMillis(Long trackTimeMillis) {
		this.trackTimeMillis = trackTimeMillis;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getCurrency() {
		return currency;
	}

	public void setCurrency(String currency) {
		this.currency = currency;
	}

	public String getPrimaryGenreId() {
		return primaryGenreId;
	}

	public void setPrimaryGenreId(String primaryGenreId) {
		this.primaryGenreId = primaryGenreId;
	}

	public String getPrimaryGenreName() {
		return primaryGenreName;
	}

	public void setPrimaryGenreName(String primaryGenreName) {
		this.primaryGenreName = primaryGenreName;
	}

	public Boolean getIsStreamable() {
		return isStreamable;
	}

	public void setIsStreamable(Boolean isStreamable) {
		this.isStreamable = isStreamable;
	}

























	
}

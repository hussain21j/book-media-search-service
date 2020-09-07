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
package bookmediasearchservice.bookmediasearchservice.service;


import bookmediasearchservice.bookmediasearchservice.converters.ServiceConverter;
import bookmediasearchservice.bookmediasearchservice.dto.*;
import bookmediasearchservice.bookmediasearchservice.http.Connector;
import bookmediasearchservice.bookmediasearchservice.http.URLConnector;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Request object for the iTunes Search API.
 * 
 * @see <a href="https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/#searching">Search API</a>
 */
@Slf4j
public class ItuneService implements SearchService {

	private static final String API_ENDPOINT = "https://itunes.apple.com/search?";

	private String term;
	private Integer limit = 5;
	private Lang lang;
	private Media media = Media.MUSIC;
	private Integer version;
	private ServiceConverter serviceConverter;


	ItuneService(ServiceConverter serviceConverter) {
		this.serviceConverter = serviceConverter;
	}

	/**
	 * search the iTune service
	 * @param text
	 * @return
	 */
	@Override
	public List<SearchResponse> search(String text) {
		this.term = text;
		Connector connector = URLConnector.INSTANCE;
		if (connector == null) {
			throw new IllegalArgumentException("connector can not be null");
		}
		try {
			String url = buildURL();
			String response = connector.get(url);
			log.trace("{} -> {}", url, response);
			return this.serviceConverter.convert(ITuneSearchResponse.READER.readValue(response));
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
	}



	/**
	 * Create the request URL for this {@link ItuneService}
	 * 
	 * @return full request URL matching this {@link ItuneService}
	 * @throws IllegalStateException
	 *             if no term is set in this {@link ItuneService}
	 */
	public String buildURL() {
		return new StringBuilder(API_ENDPOINT).append(termParam()).append(limitParam()).append(langParam())
				.append(versionParam()).toString();
	}

	/**
	 * @return "term=xxxx"
	 * @throws IllegalStateException
	 *             if term is empty or blank
	 */
	private String termParam() {
		if (term == null) {
			throw new IllegalStateException("you must provide a search term");
		}
		String t = term.trim();
		try {
			t = URLEncoder.encode(t, StandardCharsets.UTF_8.name());
		} catch (UnsupportedEncodingException e) {
			throw new IllegalStateException(e);
		}
		if (t.length() == 0) {
			throw new IllegalStateException("you must provide a search term");
		}
		return "term=" + t;
	}




	/**
	 * @return "&limit=XX" or empty {@link String}
	 */
	private String limitParam() {
		if (limit != null) {
			return "&limit=" + limit;
		}
		return "";
	}

	/**
	 * @return "&lang=XX" or empty {@link String}
	 */
	private String langParam() {
		if (lang != null) {
			return "&lang=" + lang.getCode();
		}
		return "";
	}

	/**
	 * @return "&version=XX" or empty {@link String}
	 */
	private String versionParam() {
		if (version != null) {
			return "&version=" + version;
		}
		return "";
	}

}

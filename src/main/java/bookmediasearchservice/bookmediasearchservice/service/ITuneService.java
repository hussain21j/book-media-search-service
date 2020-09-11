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
import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import bookmediasearchservice.bookmediasearchservice.dto.itune.ITuneSearchResponse;
import bookmediasearchservice.bookmediasearchservice.dto.itune.Lang;
import bookmediasearchservice.bookmediasearchservice.dto.itune.Media;
import bookmediasearchservice.bookmediasearchservice.http.Connector;
import bookmediasearchservice.bookmediasearchservice.http.URLConnector;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;
import com.google.common.base.Stopwatch;
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Timer;
import lombok.extern.slf4j.Slf4j;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.TimeUnit;

import static bookmediasearchservice.bookmediasearchservice.constants.ApplicationConstants.ITUNE_MEDIA_SERVICE_METRIC;


/**
 * Searching service in the iTune API
 * As mentioned in the assignment document, documentation for the iTune service in following lin
 *
 * @see <a href="https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/#searching">iTune Search API</a>
 */
@Slf4j
public class ITuneService implements SearchService {
    private ServiceConverter serviceConverter;
    private String apiEndpoint;
    private int resultCount;
    private int connectionTimeOut;
    private int readTimeOut;

    private String term;
    private Lang lang;
    private Media media = Media.MUSIC;
    private Integer version;
    private MeterRegistry meterRegistry;

    /**
     * mapper to convert json string to the object
     */
    public static final ObjectReader READER = new ObjectMapper().readerFor(ITuneSearchResponse.class);


    ITuneService(ServiceConverter serviceConverter, String apiEndpoint, int resultCount, int connectionTimeOut, int readTimeOut, MeterRegistry meterRegistry) {
        this.serviceConverter = serviceConverter;
        this.apiEndpoint = apiEndpoint;
        this.resultCount = resultCount;
        this.connectionTimeOut = connectionTimeOut;
        this.readTimeOut = readTimeOut;
        this.meterRegistry = meterRegistry;
    }

    /**
     * search the iTune service
     *
     * @param text - text to be search
     * @return List of searches in the form of {@link SearchResponse}
     */
    @Override
    public List<SearchResponse> search(String text) {
        Timer timer = getTimer();
        this.term = text;
        List<SearchResponse> responses;
        Connector connector = URLConnector.INSTANCE;
        Stopwatch stopwatch = Stopwatch.createUnstarted();
        if (connector == null) {
            throw new IllegalArgumentException("connector can not be null");
        }
        try {
            stopwatch.start();
            String response = connector.get(getURLConnection());
            stopwatch.stop();
            responses = this.serviceConverter.convert(READER.readValue(response));
        } catch (IOException e) {
            log.error("connection to ITune service with url {} could not be made", this.apiEndpoint);
            responses = Collections.emptyList();
        } finally {
            log.info("time elapsed in search of ITune service {} millisecond", stopwatch.elapsed(TimeUnit.MILLISECONDS));
            timer.record(stopwatch.elapsed(TimeUnit.MILLISECONDS), TimeUnit.MILLISECONDS);
        }
        return responses;
    }


    /**
     * @return full request URL for iTune service
     */
    private String buildURL() {
        return new StringBuilder(apiEndpoint).append(termParam()).append(limitParam()).append(langParam())
                .append(versionParam()).toString();
    }

    /**
     * @return "term=xxxx"
     * @throws IllegalStateException if term is empty or blank
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
     * makes the URLConnection with url and timeout settings
     *
     * @return
     * @throws IOException
     */
    private URLConnection getURLConnection() throws IOException {
        URLConnection connection = (new URL(buildURL())).openConnection();
        connection.setConnectTimeout(this.connectionTimeOut);
        connection.setReadTimeout(this.readTimeOut);
        return connection;
    }

    /**
     * gets the Metrics Timer object
     *
     * @return
     */
    public Timer getTimer() {
        return Timer.builder(ITUNE_MEDIA_SERVICE_METRIC).tag("method", "search").register(meterRegistry);
    }


    /**
     * @return "&limit=XX" or empty {@link String}
     */
    private String limitParam() {
        if (resultCount != 0) {
            return "&limit=" + resultCount;
        }
        return "";
    }

    /**
     * @return "&lang=XX" or empty
     */
    private String langParam() {
        if (lang != null) {
            return "&lang=" + lang.getCode();
        }
        return "";
    }

    /**
     * @return "&version=XX" or empty
     */
    private String versionParam() {
        if (version != null) {
            return "&version=" + version;
        }
        return "";
    }

}

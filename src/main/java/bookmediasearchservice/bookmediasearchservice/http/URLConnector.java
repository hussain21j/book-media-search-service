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
package bookmediasearchservice.bookmediasearchservice.http;

import lombok.extern.slf4j.Slf4j;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URLConnection;
import java.nio.charset.StandardCharsets;

/**
 * Default {@link Connector} implementation using {@link URLConnection}.
 */
@Slf4j
public class URLConnector implements Connector {
    /**
     * Reusable URLConnector object
     */
    public static final URLConnector INSTANCE = new URLConnector();

    /**
     * Private constructor to deny object creation
     */
    private URLConnector() {
    }

    public static URLConnector getInstance() {
        return INSTANCE;
    }

    /**
     * reads the inputstream from the url connection
     */
    public String get(URLConnection connection) throws IOException {
        try (BufferedReader in = new BufferedReader(
                new InputStreamReader(connection.getInputStream(), StandardCharsets.UTF_8))) {
            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = in.readLine()) != null) {
                sb.append(line);
                sb.append(System.lineSeparator());
            }
            return sb.toString().trim();
        }
    }

}

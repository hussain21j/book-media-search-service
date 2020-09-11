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

import bookmediasearchservice.bookmediasearchservice.converters.ProviderSearchResponse;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

/**
 * <p>
 * iTunes Search response POJO
 * </P>
 */
@JsonIgnoreProperties(ignoreUnknown = true)
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ITuneSearchResponse implements ProviderSearchResponse {
    private int resultCount;
    private List<Result> results = new ArrayList<>();
}

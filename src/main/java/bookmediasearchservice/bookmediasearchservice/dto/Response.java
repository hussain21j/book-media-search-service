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
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Full iTunes Search or Lookup response
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class Response {

	private int resultCount;
	private final List<Result> results = new ArrayList<>();
	public int getResultCount() {
		return resultCount;
	}

	//converts the
	public static final ObjectReader READER = new ObjectMapper().readerFor(Response.class);

	public void setResultCount(int resultCount) {
		this.resultCount = resultCount;
	}

	public List<Result> getResults() {
		return results;
	}

	public void setResults(List<Result> results) {
		this.results.clear();
		if (results != null) {
			this.results.addAll(results);
		}
	}

	@Override
	public String toString() {
		return "Response [resultCount=" + resultCount + ", results=" + results + "]";
	}
	
}

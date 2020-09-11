# book-media-search-service
**book-media-search-service is a REST API** The service makes the search in the `Google Book API` and `ITune API`.

### How to run the solution
 * prerequisite to run the application is the minimum java version 8 should be installed on the system
 * Download the zip file provided in mail, and unzip it
 * you will find 2 files , first is the `book-media-search-service.jar` and the second is `application.properties`
 * place both the file together in a directory from where you want to run the application
 * now run the command `java -jar book-media-search-service.jar --name="application"`
 * open your browser and use address `http://localhost:8080/`, and enjoy search :)
 
### what can be configured externally
following properties are configurable in the application through application.properties.   
* port on which application start
* google book search API url
* iTune search API url
* no of searches from each upstream API
* connection and read timeout

### major technologies used and reason to chose 
* [![Spring Boot] - Quick to configure and build with help of spring boot starters
* Java 8 - backend main language
* Maven - Build tool
* prometheus micrometer - for generating metrics
* Angular 8 - for building the UI, quick to set up and build

### major features of the solution
* futuristic design
* customizable
* generates metrics

### Health check and Metrics

[![Maven Central badge](https://maven-badges.herokuapp.com/maven-central/be.ceau/itunes-api/badge.svg)](https://mvnrepository.com/artifact/be.ceau/itunes-api)  [![Javadocs](https://javadoc.io/badge/be.ceau/itunes-api.svg)](https://javadoc.io/doc/be.ceau/itunes-api)  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0.txt) [![build status](https://api.travis-ci.org/mdewilde/itunes-api.svg?branch=master)](https://travis-ci.org/mdewilde/itunes-api) ![code coverage](https://codecov.io/gh/mdewilde/itunes-api/branch/master/graph/badge.svg)

**iTunes API** is a Java client library providing easy programmatic access to four different iTunes APIs.

  * [Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/#searching)
  * [Lookup API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/#lookup)
  * [Feed Generator API](https://rss.itunes.apple.com/en-us)
  * [Genre ID API](https://affiliate.itunes.apple.com/resources/documentation/genre-mapping/)

### Usage

##### Search
Search for 15 podcasts with CBS Radio as author in the Canadian iTunes store:

```Java
Response response = new Search("cbs radio")
	.setCountry(Country.CANADA)
	.setAttribute(Attribute.AUTHOR_TERM)
	.setMedia(Media.PODCAST)
	.setLimit(15)
	.execute();
```
_See also_ [Search API page on apple.com](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/#searching)

##### Lookup
Lookup Bruce Springsteen albums by his iTunes artist id, 178834:
		
```Java
Response response = new Lookup()
	.addId("178834")
	.setEntity(Entity.ALBUM)
	.execute();
```

_See also_ [Lookup API page on apple.com](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/#lookup)

##### Feed Generator
The purpose of the Feed Generator API is to create custom RSS feeds of specific iTunes Store content, such as charts and new entries.

This library allows creating feed URLs programmatically. It also allows retrieving the feed content directly.

For example, create a feed URL for the top 10 hot albums for Apple Music in France:

```Java
String url = new FeedGenerator()
	.setCountry(Country.FRANCE)
	.setMediaType(MediaType.APPLE_MUSIC)
	.setFeedType(FeedType.HOT_ALBUMS)
	.setResultsLimit(10)
	.getUrl();
```

To retrieve the feed content directly:

```Java
Feed feed = new FeedGenerator()
	.setAllowExplicit(true)
	.setCountry(Country.FRANCE)
	.setMediaType(MediaType.APPLE_MUSIC)
	.setFeedType(FeedType.HOT_ALBUMS)
	.setResultsLimit(10)
	.execute();
```

_See also_ [Feed Generator page on apple.com](https://rss.itunes.apple.com/)

##### Genre ID
Get the full genre hierarchy for the iTunes store, along with relevant links for each genre.

```Java
GenreIdsResponse response = new GenreIdsAppendix().getGenres();
```

_See also_ [Genre ID page on apple.com](https://affiliate.itunes.apple.com/resources/documentation/genre-mapping/)

##### HTTP connection setup

To reduce external dependencies, **iTunes API** has a default HTTP implementation relying on `java.net.URLConnection`. However, using your preferred way to make HTTP requests can be done by implementing the `be.ceau.itunesapi.http.Connector` interface and passing an instance to the relevant API entry point:

  * `be.ceau.itunesapi.Search.execute(Connector)`
  * `be.ceau.itunesapi.Lookup.execute(Connector)`
  * `be.ceau.itunesapi.FeedGenerator.execute(Connector)`
  * `be.ceau.itunesapi.GenreIdsAppendix.execute(Connector)`

### Requirements
This library requires Java 7 or higher.

### Maven Central
Include this project directly from Maven Central
```XML
<dependency>
	<groupId>be.ceau</groupId>
	<artifactId>itunes-api</artifactId>
	<version>${project.version}</version>
</dependency>
```
### iTunes Search
**iTunes API** is an evolution of the **iTunes Search** library. The new name **iTunes API** reflects the fact multiple APIs are implemented by the library.

### GnuPG public key
Verify signature files with my [GnuPG public key](https://www.ceau.be/pubkey.gpg).

### Javadoc
View javadoc for current release at [javadoc.io](https://javadoc.io/doc/be.ceau/itunes-api).

### License
Licensed under [the Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0.txt).

### Disclaimer
iTunes is a trademark of Apple Inc., registered in the U.S. and other countries.

This library has not been authorized, sponsored, or otherwise approved by Apple Inc.
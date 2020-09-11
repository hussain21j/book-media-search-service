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
* Spring Boot - Quick to configure and build with help of spring boot starters
* Java 8 - backend main language
* Maven - Build tool
* prometheus micrometer - for generating metrics
* Angular 8 - for building the UI, quick to set up and build

### major features of the solution
* futuristic design
* customizable
* generates metrics

### Health check and Metrics
* Once the application started the health check end point generated from prometheus metrics 
can be found at  url url  `http://localhost:8080/actuator/health` [actuator health check]([Search API](https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/#searching))
* metrics of http calls can be found on url `http://localhost:8080/actuator/metrics/http.server.requests` [http health check]([Search API](http://localhost:8080/actuator/metrics/http.server.requests))
* Metrics of the search end point can be found at url `http://localhost:8080/actuator/prometheus` and search with word `SearchController`
* Metrics of Upstream service response time found at `http://localhost:8080/actuator/prometheus` search with `google_book_search_service` for Google Book Service and `itune_media_search_service` for ITune search
* NOTE - Please change the port on above URLS if port is different than 8080 

### Design , scalability and flexibility of the solution
* Application can be run on any environment, just the update the external properties file for the environment and done
* The back end API and the UI application can be run separately
* you can inject any number of services you want for searching. which mean you can add any number of services you want like `Google Book Service` and `ITune service`. The design of code is capable enough to handle to it.
* you can easily change the behavoiur of the converter. The code design is flexible to accomodate it.

![alt text](https://github.com/hussain21j/book-media-search-service/blob/master/class-diagram.png)


### Further improvements I wanted to, but could not because of time limit
1. better and clean approach for accessing the micrometer object in non spring managed classes
2. improve exception handling 
4. wanted to containarize the application
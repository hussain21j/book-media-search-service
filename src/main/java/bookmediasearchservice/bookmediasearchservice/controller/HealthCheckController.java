package bookmediasearchservice.bookmediasearchservice.controller;


import bookmediasearchservice.bookmediasearchservice.dto.SearchResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <p>
 * The HealthCheck controller for the services
 * </p>
 */
@RestController
@RequestMapping("searchservice")
@Slf4j
public class HealthCheckController {
    private static final String HEALTH_CHECK_OK = "HEALTHCHECK_OK";
    @CrossOrigin
    @GetMapping(value = "/healthcheck", produces = "application/json")
    public String getHealthCheckStatus() {
        return HEALTH_CHECK_OK;
    }
}

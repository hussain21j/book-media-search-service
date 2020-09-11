package bookmediasearchservice.bookmediasearchservice;

import io.micrometer.core.aop.TimedAspect;
import io.micrometer.core.instrument.MeterRegistry;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BookMediaSearchServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(BookMediaSearchServiceApplication.class, args);
    }

    /**
     * Bean for generating metrics
     *
     * @param meterRegistry
     * @return
     */
    @Bean
    public TimedAspect timedAspect(MeterRegistry meterRegistry) {
        return new TimedAspect(meterRegistry);
    }

}

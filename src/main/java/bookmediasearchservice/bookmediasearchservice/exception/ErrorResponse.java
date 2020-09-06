package bookmediasearchservice.bookmediasearchservice.exception;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

/**
 * Custom Error message
 */

@Getter
@Setter
public class ErrorResponse {
    public ErrorResponse(String message, String details) {
        super();
        this.timestamp = new Date();
        this.message = message;
        this.details = details;
    }

    private Date timestamp;
    private String message;
    private String details;
}

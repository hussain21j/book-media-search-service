package bookmediasearchservice.bookmediasearchservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * for cases when validation is not correct
 */
@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class ValidationException extends RuntimeException {
    public ValidationException(String message) {
        super(message);
    }
}

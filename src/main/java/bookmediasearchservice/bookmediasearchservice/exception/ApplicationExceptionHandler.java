package bookmediasearchservice.bookmediasearchservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;


/**
 * <p>
 * The single place exception handler for all types of exceptions
 * </p>
 */
@ControllerAdvice
@RestController
public class ApplicationExceptionHandler extends ResponseEntityExceptionHandler {
    private static final String APPLICATION_ERROR = "Application error, something went wrong in the API";
    private static final String VALIDATION_EXCEPTION_ERROR = "Application error, something went wrong in the API";

    /**
     * Validation exceptions
     */
    @ExceptionHandler(ValidationException.class)
    public final ResponseEntity<ErrorResponse> handValidationException(RuntimeException ex, WebRequest request) {
        ErrorResponse error = new ErrorResponse(VALIDATION_EXCEPTION_ERROR, ex.getMessage());
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /**
     * Global Runtime exception mapper when no error exception matches
     */
    @ExceptionHandler(Exception.class)
    public final ResponseEntity<ErrorResponse> handleGlobalException(RuntimeException ex, WebRequest request) {
        ErrorResponse error = new ErrorResponse(APPLICATION_ERROR, ex.getMessage());
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

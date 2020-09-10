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

    /**
     * Global Runtime exception mapper when no error exception matches
     */
    @ExceptionHandler(Exception.class)
    public final ResponseEntity<ErrorResponse> handleUserNotFoundException(RuntimeException ex, WebRequest request)
    {
        ErrorResponse error = new ErrorResponse(APPLICATION_ERROR, ex.getMessage());
        return new ResponseEntity<>(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

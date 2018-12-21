package com.team.stockerrevised.ExceptionHandlers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ErrorExceptionHandler {
 
    //Add an exception handler for NotFoundException
    @ExceptionHandler
    public ResponseEntity<ErrorResponse> handleException(NotFoundException exc) {
        
        //create ErrorResponse
    	ErrorResponse error = new ErrorResponse(
                                        HttpStatus.NOT_FOUND.value(),
                                        exc.getMessage(),
                                        System.currentTimeMillis());
        
        //Return ResponseEntity
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }
    
    //Add another exception handler to catch all exceptions
    @ExceptionHandler
    public ResponseEntity<ErrorResponse> handleException(Exception exc) {
        
        //create ErrorResponse
    	ErrorResponse error = new ErrorResponse(
                                        HttpStatus.BAD_REQUEST.value(),
                                        exc.getMessage(),
                                        System.currentTimeMillis());
        
        //Return ResponseEntity
        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }

}

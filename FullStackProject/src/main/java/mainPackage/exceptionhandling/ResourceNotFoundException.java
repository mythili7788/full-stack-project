package mainPackage.exceptionhandling;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)      /* It marks a method or exception class with the status code and 
 reason message that should be returned .the status code is applied to the HTTP response when the handler method is
 invoked,or whenever the specified exception is thrown.*/
public class ResourceNotFoundException extends RuntimeException {
	private static final long serialVersionUID = 1L;
	/* For serialization and deserialization to work properly,each serializable class must have a version number
	 * associated with it-the serialVersionUID.The purpose of this value is to make sure that the classes  used both
	 * by the sender (the one that serializes)and the receiver (the one that deserializes)of the serialized object
	 * are comptatible with each other.*/

	public ResourceNotFoundException(String message) {
		super(message);
	}
}


package mainPackage.controllers;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import mainPackage.exceptionhandling.ResourceNotFoundException;
import mainPackage.model.AirLine;
import mainPackage.repository.AirLineRepository;

@CrossOrigin(origins ="http://localhost:4200") // This annotation enable cross-orgin resource sharing only for this specific method.
@RestController    // This annotation is a convenience annotation that is itself annotated with @Controller and @responseBody
@RequestMapping("/AirlineReservation/")  //It is used to map web requests onto specific handler classes and/or handler methods.
public class AirLineController {
	@Autowired                        // It used for automatic dependency injection.
	private AirLineRepository reposit;

	@PostMapping("/airlineDetails")  // this annotation for mapping HTTP POST requests onto specific handler methods.
	public AirLine  saveAirlineDetails(@RequestBody  AirLine  details) {
		return reposit.save(details);
	}

	@GetMapping("/airlineDetails")  // This annotation for mapping HTTP GET requests onto specific handler methods.
	public ResponseEntity<List<AirLine>>getAllAirlineDetails(@RequestParam(required=false) String name){
		try {
			List<AirLine> airplaneList=new ArrayList<AirLine>();
			if(name!=null) {
				reposit.findByairlineNameContaining(name).forEach(airplaneList::add);
				return new  ResponseEntity<>(airplaneList,HttpStatus.OK);
			}
			else {
				airplaneList=reposit.findAll();
				return new  ResponseEntity<>(airplaneList,HttpStatus.OK);
			}
		}
		catch(Exception  exceptionObject) {
			return new  ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}	
	}	

	@GetMapping("/airlineDetails/{id}") 
	public ResponseEntity<AirLine> getByAirlineId(@PathVariable int id) {
		AirLine  savedRecord= reposit.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("The record does not exist"));
		return ResponseEntity.ok(savedRecord);
	}

	@PutMapping("/airlineDetails/{id}") // It is composed annotation that acts as shortcut for @RequestMapping(method=RequestMethod.PUT)
	public ResponseEntity<AirLine> updateDetails(@PathVariable int id, @RequestBody  AirLine  update_details){
		AirLine airline_detail= reposit.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("The record does not exist"));

		airline_detail.setSource(update_details.getSource());
		airline_detail.setDestination(update_details.getDestination());
		airline_detail.setSeatingCapacity(update_details.getSeatingCapacity());
		airline_detail.setCost (update_details.getCost());

		AirLine update = reposit.save(airline_detail);
		return ResponseEntity.ok(update);
	}

	@DeleteMapping("/airlineDetails/{id}")    // This annotation for mapping HTTP DELETE requests onto specific handler methods.
	public ResponseEntity<Map<String, Boolean>> deleteDetails(@PathVariable int id){
		AirLine  deleteAirline_detail = reposit.findById(id)
				.orElseThrow(() -> new  ResourceNotFoundException("The record does not exist"));
		reposit.delete(deleteAirline_detail);
		Map<String, Boolean> response = new HashMap<>();
		response.put("The record deleted successfully", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	public ResponseEntity<AirLine> updateBookingDetails(@PathVariable int id, @RequestBody AirLine detailsOfFlight){
		AirLine storedRecord= reposit.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("The record for id "+id+" does not exist"));

		storedRecord.setNumberOfSeats(detailsOfFlight.getNumberOfSeats());
		storedRecord.setCalculatedPrice(detailsOfFlight.getCalculatedPrice());

		AirLine updatedDetail = reposit.save(storedRecord);
		return ResponseEntity.ok(updatedDetail);
	}

	@DeleteMapping("/airlineDetails")
	public ResponseEntity<HttpStatus> deleteAllAirLineDetails(){
		try {
			reposit.deleteAll();
			return new  ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch(Exception exceptionObject) {
			return new  ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/airlineDetails/InternationalAirLine")
	public ResponseEntity<List<AirLine>> findByAirLine(){
		try {
			List<AirLine> airplaneList=reposit.findByisInternationalFlight(true) ;
			if( airplaneList.isEmpty()) {
				return new  ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new  ResponseEntity<>(airplaneList,HttpStatus.OK);
		}
		catch(Exception exceptionObject) {
			return new  ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/airlineDetails/DomesticAirLine")
	public ResponseEntity<List<AirLine>> findByAirLineType(){
		try {
			List<AirLine> airplaneList=reposit.findByisInternationalFlight(false);
			if( airplaneList.isEmpty()) {
				return new  ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			return new  ResponseEntity<>(airplaneList,HttpStatus.OK);
		}
		catch(Exception exceptionObject) {
			return new  ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}

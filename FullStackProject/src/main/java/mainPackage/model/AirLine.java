package mainPackage.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

@Entity                         // It identifies a class as an entity class.
@Table(name ="AirlineSystem")  // It is used to specify the primary table for the annotated entity.
@DynamicUpdate                // It is a class-level annotation that can be applied to a JPA entity.
public class AirLine {
	@Id                       // It offer the simplest mechanism to define the mapping to the primary key.
	@GeneratedValue(strategy = GenerationType.IDENTITY)  // It provides for the specification of generation strategies for the primary keys.
	private Integer airlineId;
	private String airlineName;

	@Column(name = "startingPoint") // It is used to specify the mapped column for a persistent property or field.
	private String source;

	@Column(name = "endingPoint")
	private String destination;
	private Integer seatingCapacity;
	private Integer cost;
	private Boolean isInternationalFlight;
	private Integer numberOfSeats;
	private Integer calculatedPrice;
	public Boolean getIsInternationalFlight() {
			return isInternationalFlight;
		}

		public void setIsInternationalFlight(Boolean isInternationalFlight) {
			this.isInternationalFlight = isInternationalFlight;
		}

	public AirLine() {
	}

	public AirLine(String airlineName, String source, String destination, Integer seatingCapacity,Integer cost,Integer numberOfSeats,Integer calculatedPrice,Boolean isInternationalFlight) 
	{
		this.airlineName = airlineName;
		this.source = source;
		this.destination = destination;
		this.seatingCapacity = seatingCapacity;
		this.cost = cost;
		this.isInternationalFlight = isInternationalFlight;
		this.calculatedPrice=calculatedPrice;
		this.isInternationalFlight=isInternationalFlight;
	}
	public Integer getAirlineId() {
		return airlineId;
	}

	public void setAirlineId(Integer airlineId) {
		this.airlineId = airlineId;
	}

	public String getAirlineName() {
		return  airlineName;
	}
	public void setAirlineName(String airlineName) {
		this. airlineName =  airlineName;
	}
	public String getSource() {
		return source;
	}
	public void setSource(String source ) {
		this.source = source;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination ) {
		this. destination=  destination;
	}
	public Integer getSeatingCapacity() {
		return seatingCapacity;
	}
	public void setSeatingCapacity(Integer seatingCapacity) {
		this.seatingCapacity= seatingCapacity;
	}
	public Integer getCost() {
		return  cost;
	}
	public void setCost(Integer cost) {
		this. cost=cost;
	}
	public Integer getNumberOfSeats() {
		return numberOfSeats;
		}

		public void setNumberOfSeats(Integer numberOfSeats) {
		this.numberOfSeats = numberOfSeats;
		}

		public Integer getCalculatedPrice() {
		return calculatedPrice;
		}

		public void setCalculatedPrice(Integer calculatedPrice) {
		this.calculatedPrice = calculatedPrice;

}
}


package mainPackage.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import mainPackage.model.AirLine;

@Repository
/* It is used to indicate that the class provides the mechanism for storage,retrieval,search,update
 * and delete operation on objects.
 */
public interface AirLineRepository extends JpaRepository<AirLine, Integer>{
	List<AirLine>findByisInternationalFlight(Boolean isInternational);
	List<AirLine>findByairlineNameContaining(String name);
}

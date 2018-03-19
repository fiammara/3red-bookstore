package lt.vtvpmc.threered.bookstore.author;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface AuthorRepository extends JpaRepository<Author, Long> {
	
	@Query("Select a from Author a where a.firstName = ?1 and a.lastName = ?2")
	Author findAuthoryByFirstNameAndLastName(String firstName, String  lastName);

}

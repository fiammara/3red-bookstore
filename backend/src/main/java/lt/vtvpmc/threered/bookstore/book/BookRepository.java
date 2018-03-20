package lt.vtvpmc.threered.bookstore.book;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface BookRepository extends JpaRepository<Book, Long> {
	@Query("Select b from Book b where b.isbn = ?1")
	Book findBookByIsbn(String isbn);
}

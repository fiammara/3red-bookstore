package lt.vtvpmc.threered.bookstore.book;

import java.util.List;

import lt.vtvpmc.threered.bookstore.author.Author;
import lt.vtvpmc.threered.bookstore.category.Category;

public interface BookStoreService {
	void addBook(Book book);
	List<Book> getAllBooks();
	
	void addAuthor(Author author);
	List<Author> getAllAuthors();
	
	void addCategory(Category category);
	List<Category> getAllCategories();
	
	
	
}

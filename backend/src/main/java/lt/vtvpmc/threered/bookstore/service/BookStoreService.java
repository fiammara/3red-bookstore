package lt.vtvpmc.threered.bookstore.service;

import java.util.List;

import lt.vtvpmc.threered.bookstore.model.Author;
import lt.vtvpmc.threered.bookstore.model.Book;
import lt.vtvpmc.threered.bookstore.model.Category;

public interface BookStoreService {
	void addBook(Book book);
	List<Book> getAllBooks();
	
	void addAuthor(Author author);
	List<Author> getAllAuthors();
	
	void addCategory(Category category);
	List<Category> getAllCategories();
	
	
	
}

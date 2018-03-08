package lt.vtvpmc.threered.bookstore.service;

import java.util.List;

import lt.vtvpmc.threered.bookstore.model.Book;

public interface BookStoreService {
	void addBook(Book book);
	List<Book> getBooks();
}

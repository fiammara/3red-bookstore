package lt.vtvpmc.threered.bookstore.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

import lt.vtvpmc.threered.bookstore.model.Book;
import lt.vtvpmc.threered.bookstore.repository.BookRepository;

@Service
public class BookStoreServiceImpl implements BookStoreService {
	private BookRepository repo;

	@Autowired
	public BookStoreServiceImpl(BookRepository repo) {
		this.repo = repo;
	}

	@Transactional
	public void addBook(@RequestBody Book book) {
		repo.save(book);
	}

	@Transactional(readOnly = true)
	public List<Book> getBooks() {
		return repo.findAll();
	}

}

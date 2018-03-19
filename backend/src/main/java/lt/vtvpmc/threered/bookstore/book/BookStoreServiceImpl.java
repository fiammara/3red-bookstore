package lt.vtvpmc.threered.bookstore.book;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.vtvpmc.threered.bookstore.author.Author;
import lt.vtvpmc.threered.bookstore.author.AuthorRepository;
import lt.vtvpmc.threered.bookstore.category.Category;
import lt.vtvpmc.threered.bookstore.category.CategoryRepository;

@Service
public class BookStoreServiceImpl implements BookStoreService {
	private BookRepository bookRepo;
	private AuthorRepository authorRepo;
	private CategoryRepository categoryRepo;

	@Autowired
	public BookStoreServiceImpl(BookRepository bookRepo, AuthorRepository authorRepo, CategoryRepository categoryRepo) {
		this.bookRepo = bookRepo;
		this.authorRepo = authorRepo;
		this.categoryRepo = categoryRepo;
	}

	@Transactional
	@Override
	public void addBook(Book book) {
		Book existant = bookRepo.findBookByIsbn(book.getIsbn());
		if (existant != null) {
			bookRepo.save(book);
		} else {
			for (Category c : book.getCategories()) {
				this.addCategory(c);
				book.getCategories().add(c);
			}
			for (Author a : book.getAuthors()) {
				this.addAuthor(a);
				book.getAuthors().add(a);
			}
			bookRepo.save(book);
		}
	}

	@Transactional(readOnly = true)
	@Override
	public List<Book> getAllBooks() {
		return bookRepo.findAll();
	}

	@Transactional
	@Override
	public void addAuthor(Author author) {
		Author existant = authorRepo.findAuthoryByFirstNameAndLastName(author.getFirstName(), author.getLastName());
		if (existant == null) {
			authorRepo.save(author);
		} else {
			author.setId(existant.getId());
			authorRepo.save(author);
		}
	}

	@Transactional(readOnly = true)
	@Override
	public List<Author> getAllAuthors() {
		return authorRepo.findAll();
	}

	@Transactional
	@Override
	public void addCategory(Category category) {
		Category existant = categoryRepo.findCategoryByName(category.getName());
		if (existant == null) {
			categoryRepo.save(category);
		} else {
			category.setId(existant.getId());
			categoryRepo.save(category);
		}
	}

	@Transactional(readOnly = true)
	@Override
	public List<Category> getAllCategories() {
		return categoryRepo.findAll();
	}

}

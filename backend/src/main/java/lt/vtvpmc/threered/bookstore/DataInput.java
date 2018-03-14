package lt.vtvpmc.threered.bookstore;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import lt.vtvpmc.threered.bookstore.model.Author;
import lt.vtvpmc.threered.bookstore.model.Book;
import lt.vtvpmc.threered.bookstore.model.Category;
import lt.vtvpmc.threered.bookstore.service.BookStoreService;

@Component
public class DataInput implements CommandLineRunner {
	private BookStoreService service;
	
	@Autowired
	public DataInput(BookStoreService service) {
		this.service = service;
	}

	@Override
	public void run(String... args) throws Exception {
		Author oliver = new Author("Jamie", "Oliver");
		Set<Author> authors = new HashSet<Author>();
		authors.add(oliver);
		Author oliver2 = new Author("Jamie", "Oliver");
		Set<Author> authors2 = new HashSet<Author>();
		authors2.add(oliver2);
		
		
		Category cuisine = new Category("cuisine");
		Category drama = new Category("drama");
		Set<Category> categories = new HashSet<Category>();
		categories.add(cuisine);
		categories.add(drama);
	
		Category cuisine2 = new Category("cuisine");
		Category detective = new Category("detective");
		Set<Category> categories2 = new HashSet<Category>();
		categories2.add(cuisine2);
		categories2.add(detective);
		
		
		
		Book cooking = new Book("https://book", "Cooking", "2016", "5667291919", new BigDecimal("20"), "Cooking book", 4, true);
		service.addBook(categories, authors, cooking);
		Book cooking2 = new Book("https://book", "Cooking", "2016", "5667291910", new BigDecimal("20"), "Cooking book", 4, true);
		service.addBook(categories2, authors2, cooking2);
		

	}

}

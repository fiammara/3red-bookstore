package lt.vtvpmc.threered.bookstore.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lt.vtvpmc.threered.bookstore.model.Book;
import lt.vtvpmc.threered.bookstore.service.BookStoreService;

@RestController
@Api(value = "book")
@RequestMapping(value = "api/books")
public class BookController {
	private BookStoreService service;
	
	
	@Autowired
	public BookController(BookStoreService service) {
		this.service = service;
	}

	@RequestMapping(method = RequestMethod.POST)
	@ApiOperation(value = "Add book", notes = "Adds new book to the BookStore")
	public void addBook(@ApiParam @RequestBody Book book) {
		service.addBook(book);
	}
	
	@RequestMapping(method = RequestMethod.GET)
	@ApiOperation(value = "Get books", notes = "Returns all books in the BookStore")
	public List<Book> getBooks(){
		return service.getBooks();
	}

}

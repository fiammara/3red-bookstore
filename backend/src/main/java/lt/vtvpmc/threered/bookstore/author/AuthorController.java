package lt.vtvpmc.threered.bookstore.author;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lt.vtvpmc.threered.bookstore.book.BookStoreService;

@RestController
@Api(value = "author")
@RequestMapping(value = "api/authors")
public class AuthorController {
	private BookStoreService service;

	@Autowired
	public AuthorController(BookStoreService service) {
		this.service = service;
	}
	
	@RequestMapping(method = RequestMethod.POST)
	@ApiOperation(value = "Add author", notes = "Adds new author to the BookStore")
	public void addAuthor(@ApiParam @RequestBody Author author) {
		service.addAuthor(author);
	}
	
	@RequestMapping(method = RequestMethod.GET)
	@ApiOperation(value = "Get all authors", notes = "Returns all authors in the BookStore")
	public List<Author> getAllAuthors(){
		return service.getAllAuthors();
	}

}

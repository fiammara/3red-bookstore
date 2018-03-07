package com.vtvpmc.threered.bookstore.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vtvpmc.threered.bookstore.model.Book;
import com.vtvpmc.threered.bookstore.repository.BookRepository;

@RestController
public class BookController {
	private BookRepository repo;
	
	@Autowired
	public BookController(BookRepository repo) {
		this.repo = repo;
	}

	@PostMapping("/api/books")
	public void addBook(@RequestBody Book book) {
		repo.save(book);
	}
	
	@GetMapping("/api/books")
	public List<Book> getBooks(){
		return repo.findAll();
	}

}

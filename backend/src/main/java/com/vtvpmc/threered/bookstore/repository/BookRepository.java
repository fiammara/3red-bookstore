package com.vtvpmc.threered.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vtvpmc.threered.bookstore.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}

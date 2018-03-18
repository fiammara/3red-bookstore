package lt.vtvpmc.threered.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.vtvpmc.threered.bookstore.model.User;



public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}

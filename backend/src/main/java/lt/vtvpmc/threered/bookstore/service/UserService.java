package lt.vtvpmc.threered.bookstore.service;

import lt.vtvpmc.threered.bookstore.model.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}

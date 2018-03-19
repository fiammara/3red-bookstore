package lt.vtvpmc.threered.bookstore.user;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}

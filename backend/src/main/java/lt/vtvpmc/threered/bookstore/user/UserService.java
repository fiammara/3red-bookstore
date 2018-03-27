package lt.vtvpmc.threered.bookstore.user;

import java.util.List;

import lt.vtvpmc.threered.bookstore.role.Role;

public interface UserService {
    void addUser(UserCreate user);
    List<User> getAllUsers();
    void deleteUser(String username);
    User findByUsername(String username);
    void addRole(Role role);
    Role findRoleByName(String name);
}

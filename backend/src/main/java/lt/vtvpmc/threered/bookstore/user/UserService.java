package lt.vtvpmc.threered.bookstore.user;

import java.util.List;

import javax.validation.Valid;

public interface UserService {

	List<User> findAllUsers();

	User findById(long id);

	void deleteUserById(long id);

	//boolean isUserExist(User user);

	void addUser(UserCreate user);

	

	void updateUser(long id, UserCreate user);

	

}
package lt.vtvpmc.threered.bookstore.user;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;

@RestController
@RequestMapping(value = "api/users")
@Api(value = "user")
@CrossOrigin
public class UserController {
	@Autowired
	private UserService userService;

	// @Autowired
	// private SecurityService securityService;
	//
	// @Autowired
	// private UserValidator userValidator;

	@RequestMapping(method = RequestMethod.GET)
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}

	@RequestMapping(method = RequestMethod.POST)
	public void addAdmin(@ApiParam @RequestBody @Valid UserCreate user) {
		userService.addUser(user);
	}

	@RequestMapping(path = "/{username}", method = RequestMethod.DELETE)
	public void deleteUser(@PathVariable String username) {
		userService.deleteUser(username);
	}
}
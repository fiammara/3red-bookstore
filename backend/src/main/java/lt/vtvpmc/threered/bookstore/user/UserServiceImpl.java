package lt.vtvpmc.threered.bookstore.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lt.vtvpmc.threered.bookstore.role.Role;
import lt.vtvpmc.threered.bookstore.role.RoleRepository;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private RoleRepository roleRepository;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Transactional
	@Override
    public void save(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        for (Role r : user.getRoles()) {
			this.addRole(r);
        }
        userRepository.save(user);
    }
	
	@Transactional
	@Override
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}
	@Transactional
	@Override
	public User findByUsername(String username) {
		return userRepository.findByUsername(username);
	}
	
	@Transactional
	@Override
    public void deleteUser(String username) {
		userRepository.delete(userRepository.findByUsername(username));
	}

	@Transactional
	@Override
	public void addRole(Role role) {
		Role existant = roleRepository.findRoleByName(role.getName());
		if (existant == null) {
			roleRepository.save(role);
		} else {
			role.setId(existant.getId());
			roleRepository.save(role);
		}
	}
}

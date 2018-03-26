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
	public void addUser(UserCreate user)  {
		if (this.findByUsername(user.getUsername()) != null) {
			throw new IllegalArgumentException("Such username already exists");
		} else {
			switch (user.getUserType()) {
			case ADMIN:
				Administrator admin = new Administrator();
				admin.setFirstName(user.getFirstName());
				admin.setLastName(user.getLastName());
				admin.setPhoneNo(user.getPhoneNo());
				admin.setEmail(user.getEmail());
				admin.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
				admin.setUsername(user.getUsername());
				admin.setRole(this.findRoleByName("Admin"));
				userRepository.save(admin);
				break;
			case SELLER:
				Seller seller = new Seller();
				seller.setFirstName(user.getFirstName());
				seller.setLastName(user.getLastName());
				seller.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
				seller.setPhoneNo(user.getPhoneNo());
				seller.setEmail(user.getEmail());
				seller.setUsername(user.getUsername());
				seller.setRole(this.findRoleByName("Seller"));
				userRepository.save(seller);
				break;
			}

		}

	}

	@Transactional
	@Override
	public List<User> getAllUsers() {
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
	@Transactional
	@Override
	public Role findRoleByName(String name) {
		return roleRepository.findRoleByName(name);
	}
}

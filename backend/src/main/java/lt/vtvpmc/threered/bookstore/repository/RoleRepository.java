package lt.vtvpmc.threered.bookstore.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lt.vtvpmc.threered.bookstore.model.Role;
import lt.vtvpmc.threered.bookstore.model.RoleName;

import java.util.Optional;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);
}

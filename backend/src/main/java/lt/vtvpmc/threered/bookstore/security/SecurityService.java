package lt.vtvpmc.threered.bookstore.security;



public interface SecurityService {
    String findLoggedInUsername();

    void autologin(String username, String password);

	
}

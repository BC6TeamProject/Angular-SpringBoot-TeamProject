package com.team.stockerrevised.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.team.stockerrevised.entity.User;
import com.team.stockerrevised.service.UserService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class UserController {

	// injection dependency
	@Autowired
	private UserService userService;

	//Get all 'Users information' from the database
	@GetMapping("/users")
	@ResponseStatus(HttpStatus.CREATED)
	public List<User> getUsers() {
		return userService.getUsers();
	}

	//Get all 'User information' by 'User Id'
	@GetMapping("/users/{userId}")
	@ResponseStatus(HttpStatus.CREATED)
	public User getUser(@PathVariable int userId) {
		User user = userService.getUser(userId);
		return user;
	}

	//Get 'Username' by 'User Id'
	@GetMapping("/users/username/{username}")
	@ResponseStatus(HttpStatus.CREATED)
	public Map<String, Integer> getIdByUsername(@PathVariable String username){
		Map<String, Integer> json = new HashMap<>();
		json.put("id", userService.getIdByUsername(username));
		return json;
	}

	//Add new 'User'
	@PostMapping("/users")
	@ResponseStatus(HttpStatus.CREATED)
	public User saveUser(@RequestBody User user) {
		// setid(0) to force a save of new user instead of update
		try {
			user.setId(0);
			userService.saveUser(user);
			return user;
		}
		catch (DataIntegrityViolationException ex) {
			return null;
		}
	}

	//Update existing 'Users' information
	@PutMapping("/users")
	@ResponseStatus(HttpStatus.CREATED)
	public User updateUser(@RequestBody User user) {
		userService.saveUser(user);
		return user;
	}

	//Login 'User' by checking 'Username' and 'Password'
	@PostMapping("/login")
	@ResponseStatus(HttpStatus.CREATED)
	public Map<String, String> loginUser(@RequestBody Map<String, String> json) {
		String usernameInput = json.get("username");
		String passwordInput = json.get("password");

		String searchUsernameInput = userService.getUsernameAndPassword(usernameInput, passwordInput);
		//String searchPasswordInput = userService.getPassword(passwordInput);

		if (usernameInput != null && searchUsernameInput != null && passwordInput != null) {
			json.put("id", userService.getId(usernameInput));
			return json;
		}
		else {
			return null;
		}
	}

	//Delete 'User' by 'User Id'
	@DeleteMapping("/users/{userId}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteUser(@PathVariable int userId) {
		userService.deleteUser(userId);
	}

}
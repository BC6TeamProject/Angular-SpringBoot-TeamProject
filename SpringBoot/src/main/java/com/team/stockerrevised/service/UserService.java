package com.team.stockerrevised.service;

import java.util.List;

import com.team.stockerrevised.entity.User;

public interface UserService {

	public List<User> getUsers();

	public User getUser(int theId);

	public int getIdByUsername(String username);
	
	public void saveUser(User theUser);
	
	public String getUsernameAndPassword(String username, String password);

	public String getId(String username);
	
	public void deleteUser(int theId);
	
}

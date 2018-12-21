package com.team.stockerrevised.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.team.stockerrevised.dao.UserDAO;
import com.team.stockerrevised.entity.User;


@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDAO userDAO;

	@Override
	@Transactional(readOnly=true)
	public List<User> getUsers() {
		return (List<User>) userDAO.findAll();
	}

	@Override
	@Transactional(readOnly=true)
	public User getUser(int theId) {
		return userDAO.findById(theId).get();
	}

	@Override
	@Transactional
	public int getIdByUsername(String username) {
		return userDAO.getIdByUsername(username);
	}
	

	@Override
	@Transactional
	public void saveUser(User theUser) {
		userDAO.save(theUser);
	}

	//Used inside the 'loginUser' method
	@Override
	@Transactional
	public String getUsernameAndPassword(String username, String password) {
		return userDAO.getUsernameAndPassword(username, password);
	}

	//Used inside the 'loginUser' method
	@Override
	@Transactional
	public String getId(String username) {
		return userDAO.getId(username);
	}
	
	@Override
	@Transactional
	public void deleteUser(int theId) {
		userDAO.deleteById(theId);
	}
	

}

package com.team.stockerrevised.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.team.stockerrevised.entity.User;

public interface UserDAO extends JpaRepository<User, Integer> {

	@Query("SELECT id FROM User WHERE username= ?1")
    public int getIdByUsername(String username);
	
    @Query("SELECT username,password FROM User WHERE username= ?1 AND password =?2")
	public String getUsernameAndPassword(String username, String password);
	
    @Query("SELECT id FROM User WHERE username = ?1")
    public String getId(String username);
    
}

package com.team.stockerrevised.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.team.stockerrevised.entity.Message;

public interface MessageDAO extends JpaRepository<Message, Integer>{

	/*@Transactional
	@Query("SELECT receiver FROM Message WHERE receiver = ?1")
	public Message getReceiverId(Integer userId);
	
	@Transactional
	@Query("SELECT receiver FROM Message WHERE receiver = ?1")
	public Message getSenderId(Integer userId);
	
	@Transactional
	@Query("SELECT body FROM Message WHERE receiver = ?1")
	public Message getBody(Integer userId);*/
	
    @Modifying
    @Query("DELETE FROM Message WHERE sender= ?1")
	public void deleteSender(int theSenderId);
	
    @Modifying
    @Query("DELETE FROM Message WHERE receiver= ?1")
	public void deleteReceiver(int theReceiverId);

    public List<Message> findByReceiver(@Param("receiver") int receiver);

    public List<Message> findBySender(@Param("sender") int sender);
}

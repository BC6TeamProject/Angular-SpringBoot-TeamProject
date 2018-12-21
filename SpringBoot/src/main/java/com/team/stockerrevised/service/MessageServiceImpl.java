package com.team.stockerrevised.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.team.stockerrevised.dao.MessageDAO;
import com.team.stockerrevised.entity.Message;

@Service
public class MessageServiceImpl implements MessageService {

	@Autowired
	private MessageDAO messageDAO;
	
	@Override
	@Transactional(readOnly=true)
	public List<Message> getAllMessages() {
		return messageDAO.findAll();
	}
	
	@Override
	@Transactional(readOnly=true)
	public List<Message> getReceiverMessages(int receiverId) {
		return messageDAO.findByReceiver(receiverId);
	}
	
	@Override
	@Transactional(readOnly=true)
	public List<Message> getSenderMessages(int senderId) {
		return messageDAO.findBySender(senderId);
	}
	
	@Override
	@Transactional
	public void deleteMessageBySenderId(int theSenderId) {
		messageDAO.deleteSender(theSenderId);
	}

	@Override
	@Transactional
	public void deleteMessageByReceiverId(int theReceiverId) {
		messageDAO.deleteReceiver(theReceiverId);
	}

	@Override
	@Transactional
	public void saveMessage(Message message) {
		messageDAO.save(message);
	}
	
	@Override
	@Transactional
	public void deleteMessageById(int theMessageId) {
		messageDAO.deleteById(theMessageId);
	}
	
	/*
	@Override
	@Transactional
	public Message getReceiverId(Integer userId) {
		return messageDAO.getReceiverId(userId);
	}
	
	@Override
	@Transactional
	public Message getSenderId(Integer userId) {
		return messageDAO.getSenderId(userId);
	}
	
	@Override
	@Transactional
	public Message getBody(Integer userId) {
		return messageDAO.getBody(userId);
	}*/

}

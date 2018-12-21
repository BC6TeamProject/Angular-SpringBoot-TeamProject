package com.team.stockerrevised.service;

import java.util.List;


import com.team.stockerrevised.entity.Message;

public interface MessageService {

	public List<Message> getAllMessages();
	
	public void saveMessage(Message message);
	
	public List<Message> getReceiverMessages(int receiverId);
	
	public List<Message> getSenderMessages(int senderId);
	
	public void deleteMessageBySenderId(int theSenderId);

	public void deleteMessageByReceiverId(int theReceiverId);

	public void deleteMessageById(int theMessageId);
	
	/*public Message getReceiverId(Integer userId);

	public Message getSenderId(Integer userId);

	public Message getBody(Integer userId);*/

	
	
}

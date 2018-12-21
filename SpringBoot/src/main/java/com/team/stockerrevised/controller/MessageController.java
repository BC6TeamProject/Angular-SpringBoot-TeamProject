package com.team.stockerrevised.controller;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.team.stockerrevised.entity.Message;
import com.team.stockerrevised.service.MessageService;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class MessageController {

	// injection dependency
	@Autowired
	private MessageService messageService;

	@GetMapping("/showAllMessages")
	@ResponseStatus(HttpStatus.CREATED)
	public List<Message> getAllMessages() {
		List<Message> messages = messageService.getAllMessages();
		return messages;
	}
	
	//Get all inbox messages of a user by Receiver Id
	@GetMapping("/inboxMessages/{userId}")
	@ResponseStatus(HttpStatus.CREATED)
	public List<Message> getReceiverMessages(@PathVariable Integer userId){
		List<Message> message = messageService.getReceiverMessages(userId);
		return message;
	}

	//Get all outbox messages of a user by Sender Id
	@GetMapping("/outboxMessages/{userId}")
	@ResponseStatus(HttpStatus.CREATED)
	public List<Message> getSenderMessages(@PathVariable Integer userId){
		List<Message> message = messageService.getSenderMessages(userId);
		return message;
	}

	//Insert message to database
	@PostMapping("/messages/send")
	@ResponseStatus(HttpStatus.CREATED)
	public Message addMessage(@RequestBody Message message) {
		Date date= new Date();
		long time = date.getTime();
		Timestamp timeCreated = new Timestamp(time);
		message.setTimeSent(timeCreated);
		messageService.saveMessage(message);
		return message;
	}

	//Delete 'all messages' by 'Sender Id'
	@DeleteMapping("/messages/sender/{theSenderId}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteMessageBySenderId(@PathVariable int theSenderId) {
		messageService.deleteMessageBySenderId(theSenderId);
	}

	//Delete 'all messages' by 'Receiver Id'
	@DeleteMapping("/messages/receiver/{theReceiverId}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteMessageByReceiverId(@PathVariable int theReceiverId) {
		messageService.deleteMessageByReceiverId(theReceiverId);
	}
	
	//Delete 'specific message' by 'Message Id'
	@DeleteMapping("/messages/{theMessageId}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleteMessageById(@PathVariable Integer theMessageId) {
		messageService.deleteMessageById(theMessageId);
	}
}

package com.team.stockerrevised.entity;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="messages")
public class Message {

	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="message_id")
    private int id;
 
	@Column(name="sender")
    private int sender;
 
	@Column(name="receiver")
    private int receiver;
 
    @Column(name="body")
    private String body;
 
    @Column(name="time_sent")
    private Timestamp timeSent;

    public Message() {}
 
    public int getId() {
        return id;
    }
 
    public void setId(int id) {
        this.id = id;
    }
 
	public int getSender() {
		return sender;
	}

	public void setSender(int sender) {
		this.sender = sender;
	}

    public int getReceiver() {
		return receiver;
	}

	public void setReceiver(int receiver) {
		this.receiver = receiver;
	}

	public String getBody() {
        return body;
    }
 
    public void setBody(String body) {
        this.body = body;
    }
 
    public Timestamp getTimeSent() {
        return timeSent;
    }
 
    public void setTimeSent(Timestamp timeSent) {
        this.timeSent = timeSent;
    }

}

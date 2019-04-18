package com.iiitb.springboot.model;

import javax.persistence.*;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;
@Entity
@Table(name = "login")
@EntityListeners(AuditingEntityListener.class)
public class login {
	
	@Id
	private String username;
	private String password;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	


	
}

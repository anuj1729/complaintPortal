package com.iiitb.springboot.model;

import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "admin")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"id"},allowGetters = true)
public class Admin {
	@Id
	@NotBlank
	private String username;
	@NotBlank
	private String password;
	@NotBlank
	private String domain;
	
	@NotBlank
	private String hasCreateAdminPrivelege = "no";
	public String getHasCreateAdminPrivelege() {
		return hasCreateAdminPrivelege;
	}

	public void setHasCreateAdminPrivelege(String hasCreateAdminPrivelege) {
		this.hasCreateAdminPrivelege = hasCreateAdminPrivelege;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword(){
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getDomain() {
		return domain;
	}

	public void setDomain(String domain) {
		this.domain = domain;
	}
}

package com.iiitb.springboot.model;

import javax.persistence.*;

import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table(name = "complaint")
@EntityListeners(AuditingEntityListener.class)
public class ComplaintForm {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int complaintid;
	
	private String domain;
	private String subject;
	private String description;
	private String confidentiality;
	public int getComplaintid() {
		return complaintid;
	}
	public void setComplaintid(int complaintid) {
		this.complaintid = complaintid;
	}
	public String getDomain() {
		return domain;
	}
	public void setDomain(String domain) {
		this.domain = domain;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getConfidentiality() {
		return confidentiality;
	}
	public void setConfidentiality(String confidentiality) {
		this.confidentiality = confidentiality;
	}
	
	
	

}

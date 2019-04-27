package com.iiitb.springboot.controller;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.iiitb.springboot.model.Complaint;
import com.iiitb.springboot.repositories.ComplaintRepository;

@RestController
@CrossOrigin(origins = "http://localhost:8087")
public class ComplaintController {
	@Autowired
	ComplaintRepository complaintRepository;
	
	@GetMapping("/complaints")
	public List <Complaint> getAllComplaints(){
		return complaintRepository.findAllByOrderByIsResolvedAsc();
	}
	
	@PostMapping("/complaints")
	public String createComplaint(@Valid @RequestBody Complaint complaint) {
	    complaintRepository.save(complaint);
	    return "Complaint successfully posted";
	}
	
	@GetMapping("/complaints/{id}")
	public Optional<Complaint> getComplaintById(@PathVariable(value = "id") Long complaintId) {
		return complaintRepository.findById(complaintId);
	}
	
	@GetMapping("/complaints/my_complaints/{rollno}")
	public List<Complaint> getComplaintByRollno(@PathVariable(value = "rollno") String rollno) {
		return complaintRepository.findByRollno(rollno);
	}
	
	@PutMapping("/complaints/resolve/{id}")
	public Complaint resolveComplaint(@PathVariable(value = "id") Long complaintId) {
		Complaint complaint = complaintRepository.findById(complaintId).orElse(null);
		complaint.setIsResolved(1);
		Complaint updatedComplaint = complaintRepository.save(complaint);
		return updatedComplaint;
	}
	
	@GetMapping("/admin/{domain}")
	public List <Complaint> getComplaintsByDomain(@PathVariable(value = "domain") String domain){
		return complaintRepository.findByDomain(domain);
	}
}


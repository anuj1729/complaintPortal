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
public class ComplaintController {
	@Autowired
	ComplaintRepository complaintRepository;
	
	@GetMapping("/complaints")
	@CrossOrigin(origins = "http://localhost:4200")
	public List <Complaint> getAllComplaints(){
		return complaintRepository.findAll();
	}
	
	@PostMapping("/complaints")
	@CrossOrigin(origins = "http://localhost:4200")
	public String createComplaint(@Valid @RequestBody Complaint complaint) {
	    complaintRepository.save(complaint);
	    return "Complaint successfully posted";
	}
	
	@GetMapping("/complaints/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Optional<Complaint> getComplaintById(@PathVariable(value = "id") Long complaintId) {
		return complaintRepository.findById(complaintId);
	}
	
	@GetMapping("/complaints/my_complaints/{rollno}")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Complaint> getComplaintByRollno(@PathVariable(value = "rollno") String rollno) {
		return complaintRepository.findByRollno(rollno);
	}
	
	@PutMapping("/complaints/{id}")
	@CrossOrigin(origins = "http://localhost:4200")
	public Complaint updateComplaint(@PathVariable(value = "id") Long complaintId,@Valid @RequestBody Complaint complaintDetails) {
		Complaint complaint = complaintRepository.findById(complaintId).orElse(null);
		complaint.setLikes(complaintDetails.getLikes());
		Complaint updatedComplaint = complaintRepository.save(complaint);
		return updatedComplaint;
	}
	
}


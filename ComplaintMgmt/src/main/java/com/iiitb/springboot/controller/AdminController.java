package com.iiitb.springboot.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.iiitb.springboot.model.Admin;
import com.iiitb.springboot.repositories.AdminRepository;

@RestController
public class AdminController {
	@Autowired
	AdminRepository adminRepository;
	
	@PostMapping("/admin/getadmin")
	@CrossOrigin(origins = "*")
	public Admin getAdmin(@Valid @RequestBody String username) {
		return adminRepository.findByUsername(username);
	}
	
}

package com.iiitb.springboot.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.iiitb.springboot.model.login;
import com.iiitb.springboot.repositories.LoginRepository;


@EnableAutoConfiguration
@RestController
@CrossOrigin(origins = "*")
public class FormController {
	@Autowired
	LoginRepository loginRepository;
	 	
	@PostMapping("/signup")
	public login addFormDetails(@Valid @RequestBody login details)
	{
		 System.out.println(details);
		 return loginRepository.save(details);
		
	}	 

}

package com.iiitb.springboot.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.iiitb.springboot.model.login;
import com.iiitb.springboot.repositories.LoginRepository;


@EnableAutoConfiguration
@RestController
@CrossOrigin(origins = "*")
public class FormController {
	@Autowired
	LoginRepository loginRepository;
	 @RequestMapping(value = "/signup", method = RequestMethod.POST, produces="text/plain")
		public login addFormDetails(@Valid @RequestBody login details)
		{
			 return loginRepository.save(details);
			
		}
	 
	 

}

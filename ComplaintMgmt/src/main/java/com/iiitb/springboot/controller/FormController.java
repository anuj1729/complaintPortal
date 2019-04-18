package com.iiitb.springboot.controller;

import javax.validation.Valid;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.iiitb.springboot.model.ComplaintForm;


@EnableAutoConfiguration
@RestController
public class FormController {
	
	 @RequestMapping(value = "/form", method = RequestMethod.POST, produces="text/plain")
		public void addFormDetails(@Valid @RequestBody ComplaintForm form)
		{
			 System.out.println("inside check");
			 //method to be made in service to post
			 
			
		}
	 
	 

}

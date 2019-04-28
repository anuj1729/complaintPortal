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
import com.iiitb.springboot.service.IloginService;

@EnableAutoConfiguration
@RestController
@CrossOrigin(origins = "*",allowedHeaders="*")
public class LoginController {

	@Autowired
	private IloginService ls;

	@RequestMapping(value = "/login/check", method = RequestMethod.POST, produces="text/plain")
	public String check(@Valid @RequestBody login log)
	{
		 	System.out.println("inside check");
			return ls.checklogin(log);
	}
	
	@RequestMapping(value = "/admin/login/check", method = RequestMethod.POST, produces="text/plain")
	public String checkAdmin(@Valid @RequestBody login log)
	{
		return ls.checkAdminlogin(log);
	}
	 
}

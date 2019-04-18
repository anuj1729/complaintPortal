package com.iiitb.springboot.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.iiitb.springboot.model.login;
import com.iiitb.springboot.service.IloginService;

@EnableAutoConfiguration
@RestController
public class LoginController {

	@Autowired
	private IloginService ls;

	
	 @RequestMapping(value = "/login/check", method = RequestMethod.POST, produces="text/plain")
		public String check(@Valid @RequestBody login log)
		{
			 System.out.println("inside check");
			//return "helo";
			return ls.checklogin(log);
		//	retur
		}
	 
	 
	/* @PostMapping("/login")
		public ResponseEntity<Void> addlogin(@Valid @RequestBody login lg, UriComponentsBuilder builder) {
	                boolean flag = ls.addlogin(lg);
	                System.out.println("passwordddddd" + lg.getPassword());
	                System.out.println("username" + lg.getUsername());
	                if (flag == false) {
	        	    return new ResponseEntity<Void>(HttpStatus.CONFLICT);
	                }
	                HttpHeaders headers = new HttpHeaders();
	                headers.setLocation(builder.path("/login/{id}").buildAndExpand(lg.getHospitalid()).toUri());
	                return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
		}
		*/
}

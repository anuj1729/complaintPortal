package com.iiitb.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iiitb.springboot.model.login;
import com.iiitb.springboot.dao.IloginDao;

@Service
public class loginService implements IloginService {
	@Autowired
	private IloginDao loginDao;
	
	@Override
	public String checklogin(login lg)
	{
		 if (loginDao.loginExists(lg.getUsername(), lg.getPassword())) {
	            return "login success";
         } else {
	            return "login fail";
         }
	}
	
	@Override
	public String checkAdminlogin(login lg) {
		if(loginDao.adminExists(lg.getUsername(), lg.getPassword())) {
			return "login success";
		}
		else {
			return "login fail";
		}
	}

}

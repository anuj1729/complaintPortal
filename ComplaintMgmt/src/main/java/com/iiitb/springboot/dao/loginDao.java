package com.iiitb.springboot.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.iiitb.springboot.model.*;
@Transactional
@Repository
public class loginDao implements IloginDao {
	
	@PersistenceContext	
	private EntityManager entityManager;
	
	@Override
	public boolean loginExists(String user, String pass) {
		try {
			String hql = "FROM login as lg WHERE lg.username=:username and lg.password =:password";
			int count = entityManager.createQuery(hql).setParameter("username", user)
			              .setParameter("password", pass).getResultList().size();
			return count > 0 ? true : false;
		} 
		catch (Exception e) {	
			e.printStackTrace();
			return false;
		}
	}
	
	
	@Override
	public boolean adminExists(String user,String password) {
		try {
			String hql = "FROM Admin as lg WHERE lg.username=:username and lg.password =:password";
			
			int count = entityManager.createQuery(hql).setParameter("username", user)
			              .setParameter("password", password).getResultList().size();
			
			System.out.println(count);
			return count > 0 ? true : false;
			
		}
		catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
} 
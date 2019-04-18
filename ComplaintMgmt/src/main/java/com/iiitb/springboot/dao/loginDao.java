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
	
	/*add login to be added in registration
	private SHA256 hash = new SHA256();
	
	@Override
	public void addlogin(login lg) {
		System.out.println("before encrypted" + lg.getPassword());
		try {
			System.out.println("hey encrypt");
			String hashpass = hash.hash(lg.getPassword());
			//String enpass = ps.encrypt(lg.getPassword());
			System.out.println("encrypted pass" +hashpass );
			lg.setPassword(hash.hash(lg.getPassword()));
			System.out.println("encrypted" + lg.getPassword());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		entityManager.persist(lg);
	}
	*/
	@Override
	public boolean loginExists(String user, String pass) {
	//	String hashpass;
		try {
		//	hashpass = hash.hash(password);
		String hql = "FROM login as lg WHERE lg.username=:username and lg.password =:password";
			
			int count = entityManager.createQuery(hql).setParameter("username", user)
			              .setParameter("password", pass).getResultList().size();
			return count > 0 ? true : false;
			
		
		//	String hql = "SELECT lg.username FROM login as lg WHERE lg.username=username and lg.password =password";
		} catch (Exception e) {
			
			e.printStackTrace();
			return false;
		}
		
	}
} 
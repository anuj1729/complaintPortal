package com.iiitb.springboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iiitb.springboot.model.Admin;
@Repository
public interface AdminRepository extends JpaRepository<Admin,Long>{
	public Admin findByUsername(String username);
}

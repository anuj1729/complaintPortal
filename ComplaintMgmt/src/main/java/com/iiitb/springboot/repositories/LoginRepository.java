package com.iiitb.springboot.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iiitb.springboot.model.login;

@Repository
public interface LoginRepository extends JpaRepository<login,Long>{

}

package com.iiitb.springboot.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.iiitb.springboot.model.Complaint;
@Repository
public interface ComplaintRepository extends JpaRepository<Complaint,Long>{
	public List <Complaint> findByRollno(String rollno);
	public List<Complaint> findAllByOrderByIsResolvedAsc();
	public List <Complaint> findByDomain(String domain);
}

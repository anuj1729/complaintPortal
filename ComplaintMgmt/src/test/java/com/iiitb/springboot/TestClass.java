package com.iiitb.springboot;

import java.util.List;	

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.iiitb.springboot.repositories.*;
import com.iiitb.springboot.model.*;

@SpringBootTest
@RunWith(SpringRunner.class)
public class TestClass{
	@Autowired
	ComplaintRepository complaintRepository;
	@Test
	public void getListofAllComplaints() {
		 List <Complaint> complaints = complaintRepository.findAll();
		 for(int i = 0; i < complaints.size(); i++) {
			 System.out.println(complaints.get(i).getDomain());
		 }
	}
}
package com.iiitb.springboot.dao;

import com.iiitb.springboot.model.*;
public interface IloginDao {

    //void addlogin(login lg);
    
    boolean loginExists(String username, String password);
}

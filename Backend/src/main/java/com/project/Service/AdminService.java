package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.Model.AdminModel;
import com.project.DAO.AdminDAO;

@Service
public class AdminService {
@Autowired
AdminDAO logindetails;

public AdminService() {

}

public List<AdminModel> getAllLogin(){
	
	return logindetails.findAll();
}

public void saveAdmin(AdminModel loglist) {
	logindetails.save(loglist);
}

public AdminModel getAdminById(String email) {
	Optional<AdminModel> pm=logindetails.findById(email);
	if(pm.isPresent()) {
		//System.out.println(pm.get().getName());
		return pm.get();
	}else 
	return null;
	 
}

public void saveAdmin1(AdminModel loglist) {
	// TODO Auto-generated method stub
	logindetails.save(loglist);

}

}

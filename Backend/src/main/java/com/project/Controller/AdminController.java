package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.DAO.AdminDAO;
import com.project.Model.AdminModel;
import com.project.service.AdminService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class AdminController {
@Autowired
AdminService log;

public List<AdminModel> getLogin() {
	
	return log.getAllLogin();

}

@PostMapping("viewadmin")
public AdminModel getAdmin(@RequestBody AdminModel id) {
	String id1=id.getEmail();
	return log.getAdminById(id1);
}

@Autowired
private AdminDAO gDOA;
@PostMapping("loginadmin")
@CrossOrigin(origins="http://localhost:4200")
public ResponseEntity<?>loginAdmin(@RequestBody AdminModel adminData){
	AdminModel admin=gDOA.findByEmail(adminData.getEmail());
	System.out.println(admin);
	if(admin.getPassword().equals(adminData.getPassword()))
		return ResponseEntity.ok(admin);
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
	}

@PostMapping("insertadmin")
public void saveLog(@RequestBody AdminModel loglist) {
	
	log.saveAdmin(loglist);

}

}

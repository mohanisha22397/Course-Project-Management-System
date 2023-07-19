package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.DAO.WorkshopLearnerDAO;
import com.project.Model.WorkshopLearnerModel;
import com.project.service.WorkshopLearnerService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class WorkshopLearnerController {
@Autowired
WorkshopLearnerService log;

@GetMapping("viewworkshoplearner")
public List<WorkshopLearnerModel> getLogin() {
	
	return log.getAllLogin();

}
@PostMapping("viewworkshop")
public WorkshopLearnerModel getLearner(@RequestBody WorkshopLearnerModel id) {
	String id1=id.getEmail();
	return log.getLearnerById(id1);
}
@PostMapping("addworkshoplearner")
public void saveLog(@RequestBody WorkshopLearnerModel loglist) {
	
	log.saveLearner(loglist);

}
@PostMapping("updateworkshoplearner")
public void updateLog(@RequestBody WorkshopLearnerModel loglist) {
	
	log.updateLearner(loglist);

}

@PostMapping("deleteworkshoplearner")
public void deleteLog(@RequestBody WorkshopLearnerModel id) {
	
	log.deleteLearner(id);

}

@Autowired
private WorkshopLearnerDAO gDOA;
@PostMapping("loginworshoplearner")
@CrossOrigin(origins="http://localhost:4200")
public ResponseEntity<?>loginUser(@RequestBody WorkshopLearnerModel userData){
	WorkshopLearnerModel user=gDOA.findByEmail(userData.getEmail());
	System.out.println(user);
	if(user.getPassword().equals(userData.getPassword()))
		return ResponseEntity.ok(user);
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
	}
}

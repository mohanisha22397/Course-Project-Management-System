package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.DAO.ProjectRoboticsLearnerDAO;
import com.project.Model.ProjectRoboticsLearnerModel;
import com.project.service.ProjectRoboticsLearnerService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ProjectRoboticsLearnerController{
@Autowired 
ProjectRoboticsLearnerService log;

@GetMapping("viewrobolearner")
public List<ProjectRoboticsLearnerModel> getLogin(){
	return log.getAllLogin();
}

@PostMapping("viewprojectrobo")
public ProjectRoboticsLearnerModel getLearner(@RequestBody ProjectRoboticsLearnerModel id) {
	String id1=id.getEmail();
	return log.getLearnerById(id1);
}
@PostMapping("addrobolearner")
public void saveLog(@RequestBody ProjectRoboticsLearnerModel loglist) {
	
	log.saveLearner(loglist);

}
@PostMapping("updaterobolearner")
public void updateLog(@RequestBody ProjectRoboticsLearnerModel loglist) {
	
	log.updateLearner(loglist);

}

@PostMapping("deleterobolearner")
public void deleteLog(@RequestBody ProjectRoboticsLearnerModel id) {
	
	log.deleteLearner(id);

}

@Autowired
private ProjectRoboticsLearnerDAO gDOA;
@PostMapping("loginrobolearner")
@CrossOrigin(origins="http://localhost:4200")
public ResponseEntity<?>loginUser(@RequestBody ProjectRoboticsLearnerModel userData){
	ProjectRoboticsLearnerModel user=gDOA.findByEmail(userData.getEmail());
	System.out.println(user);
	if(user.getPassword().equals(userData.getPassword()))
		return ResponseEntity.ok(user);
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
	}
}

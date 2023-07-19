package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.DAO.CourseWebDevLearnerDAO;
import com.project.Model.CourseWebDevLearnerModel;

import com.project.service.CourseWebDevLearnerService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class CourseWebDevLearnerController {
@Autowired
CourseWebDevLearnerService log;

@GetMapping("viewwebdevlearner")
public List<CourseWebDevLearnerModel> getLogin() {
	
	return log.getAllLogin();

}
@PostMapping("viewcoursewebdev")
public CourseWebDevLearnerModel getLearner(@RequestBody CourseWebDevLearnerModel id) {
	String id1=id.getEmail();
	return log.getLearnerById(id1);
}
@PostMapping("addwebdevlearner")
public void saveLog(@RequestBody CourseWebDevLearnerModel loglist) {
	
	log.saveLearner(loglist);

}
@PostMapping("updatewebdevlearner")
public void updateLog(@RequestBody CourseWebDevLearnerModel loglist) {
	
	log.updateLearner(loglist);

}

@PostMapping("deletewebdevlearner")
public void deleteLog(@RequestBody CourseWebDevLearnerModel id) {
	
	log.deleteLearner(id);

}

@Autowired
private CourseWebDevLearnerDAO gDOA;
@PostMapping("loginwebdevlearner")
@CrossOrigin(origins="http://localhost:4200")
public ResponseEntity<?>loginUser(@RequestBody CourseWebDevLearnerModel userData){
	CourseWebDevLearnerModel user=gDOA.findByEmail(userData.getEmail());
	System.out.println(user);
	if(user.getPassword().equals(userData.getPassword()))
		return ResponseEntity.ok(user);
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
	}

}

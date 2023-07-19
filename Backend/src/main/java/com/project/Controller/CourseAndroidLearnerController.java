package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.DAO.CourseAndroidLearnerDAO;
import com.project.Model.CourseAndroidLearnerModel;
import com.project.service.CourseAndroidLearnerService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class CourseAndroidLearnerController {
	@Autowired
	CourseAndroidLearnerService log;
	
	@GetMapping("viewandroidlearner")
	public List<CourseAndroidLearnerModel> getLogin() {
		
		return log.getAllLogin();

	}
	@PostMapping("viewcourseandroid")
	public CourseAndroidLearnerModel getLearner(@RequestBody CourseAndroidLearnerModel id) {
		String id1=id.getEmail();
		return log.getLearnerById(id1);
	}
	@PostMapping("addandroidlearner")
	public void saveLog(@RequestBody CourseAndroidLearnerModel loglist) {
		
		log.saveLearner(loglist);

	}
	@PostMapping("updateandroidlearner")
	public void updateLog(@RequestBody CourseAndroidLearnerModel loglist) {
		
		log.updateLearner(loglist);

	}

	@PostMapping("deleteandroidlearner")
	public void deleteLog(@RequestBody CourseAndroidLearnerModel id) {
		
		log.deleteLearner(id);

	}

	@Autowired
	private CourseAndroidLearnerDAO gDOA;
	@PostMapping("loginandroidlearner")
	@CrossOrigin(origins="http://localhost:4200")
	public ResponseEntity<?>loginUser(@RequestBody CourseAndroidLearnerModel userData){
		CourseAndroidLearnerModel user=gDOA.findByEmail(userData.getEmail());
		System.out.println(user);
		if(user.getPassword().equals(userData.getPassword()))
			return ResponseEntity.ok(user);
			return (ResponseEntity<?>) ResponseEntity.internalServerError();
		}
	
	
}

package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.DAO.CourseMLLearnerDAO;
import com.project.Model.CourseMLLearnerModel;
import com.project.service.CourseMLLearnerService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class CourseMLLearnerController {
	@Autowired
	CourseMLLearnerService log;
	
	@GetMapping("viewmllearner")
	public List<CourseMLLearnerModel> getLogin() {
		
		return log.getAllLogin();

	}
	@PostMapping("viewcourseml")
	public CourseMLLearnerModel getLearner(@RequestBody CourseMLLearnerModel id) {
		String id1=id.getEmail();
		return log.getLearnerById(id1);
	}
	@PostMapping("addmllearner")
	public void saveLog(@RequestBody CourseMLLearnerModel loglist) {
		
		log.saveLearner(loglist);

	}
	@PostMapping("updatemllearner")
	public void updateLog(@RequestBody CourseMLLearnerModel loglist) {
		
		log.updateLearner(loglist);

	}

	@PostMapping("deletemllearner")
	public void deleteLog(@RequestBody CourseMLLearnerModel id) {
		
		log.deleteLearner(id);

	}

	@Autowired
	private CourseMLLearnerDAO gDOA;
	@PostMapping("loginmllearner")
	@CrossOrigin(origins="http://localhost:4200")
	public ResponseEntity<?>loginUser(@RequestBody CourseMLLearnerModel userData){
		CourseMLLearnerModel user=gDOA.findByEmail(userData.getEmail());
		System.out.println(user);
		if(user.getPassword().equals(userData.getPassword()))
			return ResponseEntity.ok(user);
			return (ResponseEntity<?>) ResponseEntity.internalServerError();
		}
	
}

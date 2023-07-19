package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.DAO.LearnerDAO;
import com.project.Model.LearnerModel;
import com.project.service.LearnerService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class LearnerController {
	@Autowired
	LearnerService log;
	
	@GetMapping("viewlearner")
	public List<LearnerModel> getLogin() {
		
		return log.getAllLogin();

	}
	@PostMapping("addlearner")
	public void saveLog(@RequestBody LearnerModel loglist) {
		
		log.saveLearner(loglist);

	}
	@PostMapping("view")
	public LearnerModel getLearner(@RequestBody LearnerModel id) {
		String id1=id.getEmail();
		return log.getLearnerById(id1);
	}

	@PostMapping("updatelearner")
	public void updateLog(@RequestBody LearnerModel loglist) {
		
		log.updateLearner(loglist);

	}

	@PostMapping("deletelearner")
	public void deleteLog(@RequestBody LearnerModel id) {
		
		log.deleteLearner(id);

	}
	
	@Autowired
	private LearnerDAO gDOA;
	@PostMapping("loginlearner")
	@CrossOrigin(origins="http://localhost:4200")
	public ResponseEntity<?>loginUser(@RequestBody LearnerModel userData){
		LearnerModel user=gDOA.findByEmail(userData.getEmail());
		System.out.println(user);
		if(user.getPassword().equals(userData.getPassword()))
			return ResponseEntity.ok(user);
			return (ResponseEntity<?>) ResponseEntity.internalServerError();
		}
		


	
}

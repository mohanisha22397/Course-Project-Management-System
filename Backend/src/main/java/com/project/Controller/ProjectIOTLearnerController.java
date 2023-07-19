package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.DAO.ProjectIOTLearnerDAO;
import com.project.Model.ProjectIOTLearnerModel;
import com.project.service.ProjectIOTLearnerService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ProjectIOTLearnerController {
	@Autowired
	ProjectIOTLearnerService log;
	
	@GetMapping("viewiotlearner")
	public List<ProjectIOTLearnerModel> getLogin() {
		
		return log.getAllLogin();

	}
	@PostMapping("viewprojectiot")
	public ProjectIOTLearnerModel getLearner(@RequestBody ProjectIOTLearnerModel id) {
		String id1=id.getEmail();
		return log.getLearnerById(id1);
	}
	@PostMapping("addiotlearner")
	public void saveLog(@RequestBody ProjectIOTLearnerModel loglist) {
		
		log.saveLearner(loglist);

	}
	@PostMapping("updateiotlearner")
	public void updateLog(@RequestBody ProjectIOTLearnerModel loglist) {
		
		log.updateLearner(loglist);

	}

	@PostMapping("deleteiotlearner")
	public void deleteLog(@RequestBody ProjectIOTLearnerModel id) {
		
		log.deleteLearner(id);

	}

	@Autowired
	private ProjectIOTLearnerDAO gDOA;
	@PostMapping("loginiotlearner")
	@CrossOrigin(origins="http://localhost:4200")
	public ResponseEntity<?>loginUser(@RequestBody ProjectIOTLearnerModel userData){
		ProjectIOTLearnerModel user=gDOA.findByEmail(userData.getEmail());
		System.out.println(user);
		if(user.getPassword().equals(userData.getPassword()))
			return ResponseEntity.ok(user);
			return (ResponseEntity<?>) ResponseEntity.internalServerError();
		}
	
	
}

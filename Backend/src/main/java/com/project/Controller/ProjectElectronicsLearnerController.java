package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.DAO.ProjectElectronicsLearnerDAO;
import com.project.Model.ProjectElectronicsLearnerModel;
import com.project.service.ProjectElectronicsLearnerService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ProjectElectronicsLearnerController {
	@Autowired
	ProjectElectronicsLearnerService log;
	
	@GetMapping("vieweleclearner")
	public List<ProjectElectronicsLearnerModel> getLogin() {
		
		return log.getAllLogin();

	}
	@PostMapping("viewprojectelec")
	public ProjectElectronicsLearnerModel getLearner(@RequestBody ProjectElectronicsLearnerModel id) {
		String id1=id.getEmail();
		return log.getLearnerById(id1);
	}
	@PostMapping("addeleclearner")
	public void saveLog(@RequestBody ProjectElectronicsLearnerModel loglist) {
		
		log.saveLearner(loglist);

	}
	@PostMapping("updateeleclearner")
	public void updateLog(@RequestBody ProjectElectronicsLearnerModel loglist) {
		
		log.updateLearner(loglist);

	}

	@PostMapping("deleteeleclearner")
	public void deleteLog(@RequestBody ProjectElectronicsLearnerModel id) {
		
		log.deleteLearner(id);

	}

	@Autowired
	private ProjectElectronicsLearnerDAO gDOA;
	@PostMapping("logineleclearner")
	@CrossOrigin(origins="http://localhost:4200")
	public ResponseEntity<?>loginUser(@RequestBody ProjectElectronicsLearnerModel userData){
		ProjectElectronicsLearnerModel user=gDOA.findByEmail(userData.getEmail());
		System.out.println(user);
		if(user.getPassword().equals(userData.getPassword()))
			return ResponseEntity.ok(user);
			return (ResponseEntity<?>) ResponseEntity.internalServerError();
		}
	

}

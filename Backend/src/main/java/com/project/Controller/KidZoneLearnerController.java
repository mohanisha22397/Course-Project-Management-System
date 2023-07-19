package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.DAO.KidZoneLearnerDAO;
import com.project.Model.KidZoneLearnerModel;
import com.project.service.KidZoneLearnerService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class KidZoneLearnerController {
	@Autowired
	KidZoneLearnerService log;
	
	@GetMapping("viewkidzonelearner")
	public List<KidZoneLearnerModel> getLogin() {
		
		return log.getAllLogin();

	}
	@PostMapping("viewkidzone")
	public KidZoneLearnerModel getLearner(@RequestBody KidZoneLearnerModel id) {
		String id1=id.getEmail();
		return log.getLearnerById(id1);
	}
	@PostMapping("addkidzonelearner")
	public void saveLog(@RequestBody KidZoneLearnerModel loglist) {
		
		log.saveLearner(loglist);

	}
	@PostMapping("updatekidzonelearner")
	public void updateLog(@RequestBody KidZoneLearnerModel loglist) {
		
		log.updateLearner(loglist);

	}

	@PostMapping("deletekidzonelearner")
	public void deleteLog(@RequestBody KidZoneLearnerModel id) {
		
		log.deleteLearner(id);

	}

	@Autowired
	private KidZoneLearnerDAO gDOA;
	@PostMapping("loginkidzonelearner")
	@CrossOrigin(origins="http://localhost:4200")
	public ResponseEntity<?>loginUser(@RequestBody KidZoneLearnerModel userData){
		KidZoneLearnerModel user=gDOA.findByEmail(userData.getEmail());
		System.out.println(user);
		if(user.getPassword().equals(userData.getPassword()))
			return ResponseEntity.ok(user);
			return (ResponseEntity<?>) ResponseEntity.internalServerError();
		}
}

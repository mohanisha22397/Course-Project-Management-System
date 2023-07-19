package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.project.DAO.EEMentorDAO;
import com.project.Model.EEMentorModel;
import com.project.service.EEMentorService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class EEMentorController {
@Autowired
EEMentorService log;

@GetMapping("vieweementor")
public List<EEMentorModel> getLogin() {
	
	return log.getAllLogin();

}

@PostMapping("vieweementors")
public EEMentorModel getStudent(@RequestBody EEMentorModel id) {
	String id1=id.getEmail();
	return log.getLearnerById(id1);
}
@PostMapping("addeementor")
public void saveLearner(@RequestBody EEMentorModel loglist) {
	
	log.saveLearner(loglist);

}


@PostMapping("updateeementory")
public void updateLearner(@RequestBody EEMentorModel loglist) {
	
	log.updateLearner(loglist);

}

@PostMapping("deleteeementor")
public void deleteLearner(@RequestBody EEMentorModel id) {
	
	log.deleteLearner(id);

}

@Autowired
private EEMentorDAO gDOA;
@PostMapping("logineementor")
@CrossOrigin(origins="http://localhost:4200")
public ResponseEntity<?>loginUser(@RequestBody EEMentorModel facultyData){
	EEMentorModel faculty=gDOA.findByEmail(facultyData.getEmail());
	System.out.println(faculty);
	if(faculty.getPassword().equals(facultyData.getPassword()))
		return ResponseEntity.ok(faculty);
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
	}
	

}

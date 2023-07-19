package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.DAO.RoboIOTMentorDAO;
import com.project.Model.RoboIOTMentorModel;
import com.project.service.RoboIOTMentorService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class RoboIOTMentorController {
@Autowired
RoboIOTMentorService log;

@GetMapping("viewroboiotmentor")
public List<RoboIOTMentorModel> getLogin() {
	
	return log.getAllLogin();

}
@PostMapping("viewroboiotmentors")
public RoboIOTMentorModel getStudent(@RequestBody RoboIOTMentorModel id) {
	String id1=id.getEmail();
	return log.getLearnerById(id1);
}
@PostMapping("addroboiotmentor")
public void saveLearner(@RequestBody RoboIOTMentorModel loglist) {
	
	log.saveLearner(loglist);

}


@PostMapping("updateroboiotmentory")
public void updateLearner(@RequestBody RoboIOTMentorModel loglist) {
	
	log.updateLearner(loglist);

}

@PostMapping("deleteroboiotmentor")
public void deleteLearner(@RequestBody RoboIOTMentorModel id) {
	
	log.deleteLearner(id);

}

@Autowired
private RoboIOTMentorDAO gDOA;
@PostMapping("loginroboiotmentor")
@CrossOrigin(origins="http://localhost:4200")
public ResponseEntity<?>loginUser(@RequestBody RoboIOTMentorModel facultyData){
	RoboIOTMentorModel faculty=gDOA.findByEmail(facultyData.getEmail());
	System.out.println(faculty);
	if(faculty.getPassword().equals(facultyData.getPassword()))
		return ResponseEntity.ok(faculty);
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
	}
}

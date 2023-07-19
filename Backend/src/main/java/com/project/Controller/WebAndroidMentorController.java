package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.DAO.WebAndroidMentorDAO;
import com.project.Model.WebAndroidMentorModel;
import com.project.service.WebAndroidMentorService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class WebAndroidMentorController {
@Autowired
WebAndroidMentorService log;


@GetMapping("viewwebandroidmentor")
public List<WebAndroidMentorModel> getLogin() {
	
	return log.getAllLogin();

}
@PostMapping("viewwebandroidmentors")
public WebAndroidMentorModel getStudent(@RequestBody WebAndroidMentorModel id) {
	String id1=id.getEmail();
	return log.getLearnerById(id1);
}
@PostMapping("addwebandroidmentor")
public void saveLearner(@RequestBody WebAndroidMentorModel loglist) {
	
	log.saveLearner(loglist);

}


@PostMapping("updatewebandroidtmentory")
public void updateLearner(@RequestBody WebAndroidMentorModel loglist) {
	
	log.updateLearner(loglist);

}

@PostMapping("deletewebandroidmentor")
public void deleteLearner(@RequestBody WebAndroidMentorModel id) {
	
	log.deleteLearner(id);

}

@Autowired
private WebAndroidMentorDAO gDOA;
@PostMapping("loginwebandroidmentor")
@CrossOrigin(origins="http://localhost:4200")
public ResponseEntity<?>loginUser(@RequestBody WebAndroidMentorModel facultyData){
	WebAndroidMentorModel faculty=gDOA.findByEmail(facultyData.getEmail());
	System.out.println(faculty);
	if(faculty.getPassword().equals(facultyData.getPassword()))
		return ResponseEntity.ok(faculty);
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
	}
}

package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.DAO.MLMentorDAO;
import com.project.Model.MLMentorModel;
import com.project.service.MLMentorService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class MLMentorController {
	@Autowired
	MLMentorService log;

	@GetMapping("viewmlmentor")
	public List<MLMentorModel> getLogin() {
		
		return log.getAllLogin();

	}

	@PostMapping("viewmlmentors")
	public MLMentorModel getStudent(@RequestBody MLMentorModel id) {
		String id1=id.getEmail();
		return log.getLearnerById(id1);
	}
	@PostMapping("addmlmentor")
	public void saveLearner(@RequestBody MLMentorModel loglist) {
		
		log.saveLearner(loglist);

	}


	@PostMapping("updatemlmentory")
	public void updateLearner(@RequestBody MLMentorModel loglist) {
		
		log.updateLearner(loglist);

	}

	@PostMapping("deletemlmentor")
	public void deleteLearner(@RequestBody MLMentorModel id) {
		
		log.deleteLearner(id);

	}

	@Autowired
	private MLMentorDAO gDOA;
	@PostMapping("loginmlmentor")
	@CrossOrigin(origins="http://localhost:4200")
	public ResponseEntity<?>loginUser(@RequestBody MLMentorModel facultyData){
		MLMentorModel faculty=gDOA.findByEmail(facultyData.getEmail());
		System.out.println(faculty);
		if(faculty.getPassword().equals(facultyData.getPassword()))
			return ResponseEntity.ok(faculty);
			return (ResponseEntity<?>) ResponseEntity.internalServerError();
		}
		
}

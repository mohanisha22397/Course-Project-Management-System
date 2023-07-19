package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.Model.CourseModel;
import com.project.service.CourseService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class CourseController {
	@Autowired
	CourseService log;
	
	@GetMapping("viewcourse")
	public List<CourseModel> getLogin() {
		
		return log.getAllLogin();

	}
	
	@PostMapping("addcourse")
	public void saveLog(@RequestBody CourseModel loglist) {
		
		log.saveLearner(loglist);

	}


	@PostMapping("updatecourse")
	public void updateLog(@RequestBody CourseModel loglist) {
		
		log.updateLearner(loglist);

	}

	@PostMapping("deletecourse")
	public void deleteLog(@RequestBody CourseModel id) {
		
		log.deleteLearner(id);

	}

}

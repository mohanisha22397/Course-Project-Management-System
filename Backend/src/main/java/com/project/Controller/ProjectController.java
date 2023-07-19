package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.project.Model.ProjectModel;
import com.project.service.ProjectService;



@RestController
@CrossOrigin(origins="http://localhost:4200")
public class ProjectController {
	@Autowired
	ProjectService log;
	
	@GetMapping("viewproject")
	public List<ProjectModel> getLogin() {
		
		return log.getAllLogin();

	}

	@PostMapping("addproject")
	public void saveLog(@RequestBody ProjectModel loglist) {
		
		log.saveLearner(loglist);

	}


	@PostMapping("updateproject")
	public void updateLog(@RequestBody ProjectModel loglist) {
		
		log.updateLearner(loglist);

	}

	@PostMapping("deleteproject")
	public void deleteLog(@RequestBody ProjectModel id) {
		
		log.deleteLearner(id);

	}
}

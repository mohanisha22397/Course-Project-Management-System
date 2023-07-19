package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.Model.WorkshopModel;
import com.project.service.WorkshopService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class WorkshopController {
@Autowired
WorkshopService log;

@GetMapping("viewworkshop")
public List<WorkshopModel> getLogin() {
	
	return log.getAllLogin();

}

@PostMapping("addworkshop")
public void saveLog(@RequestBody WorkshopModel loglist) {
	
	log.saveLearner(loglist);

}


@PostMapping("updateworkshop")
public void updateLog(@RequestBody WorkshopModel loglist) {
	
	log.updateLearner(loglist);

}

@PostMapping("deleteworkshop")
public void deleteLog(@RequestBody WorkshopModel id) {
	
	log.deleteLearner(id);

}

}

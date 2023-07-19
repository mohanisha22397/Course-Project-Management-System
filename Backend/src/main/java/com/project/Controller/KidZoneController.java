package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.Model.KidZoneModel;
import com.project.service.KidZoneService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class KidZoneController {
@Autowired
KidZoneService log;

@GetMapping("viewkidzone")
public List<KidZoneModel> getLogin() {
	
	return log.getAllLogin();

}

@PostMapping("addkidzone")
public void saveLog(@RequestBody KidZoneModel loglist) {
	
	log.saveLearner(loglist);

}


@PostMapping("updatekidzone")
public void updateLog(@RequestBody KidZoneModel loglist) {
	
	log.updateLearner(loglist);

}

@PostMapping("deletekidzone")
public void deleteLog(@RequestBody KidZoneModel id) {
	
	log.deleteLearner(id);

}
}

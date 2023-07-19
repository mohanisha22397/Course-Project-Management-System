package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.Model.FeesModel;
import com.project.service.FeesService;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class FeesController {
@Autowired
FeesService log;
@GetMapping("viewfees")
public List<FeesModel> getLogin() {
	
	return log.getAllLogin();

}
@PostMapping("addfees")
public void saveLog(@RequestBody FeesModel loglist) {
	
	log.saveStudent(loglist);

}



}

package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.Model.PricingModel;
import com.project.service.PricingService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class PricingController {
@Autowired
PricingService log;

@GetMapping("viewmemfees")
public List<PricingModel> getLogin() {
	
	return log.getAllLogin();

}
@PostMapping("addmemfees")
public void saveLog(@RequestBody PricingModel loglist) {
	
	log.saveLearner(loglist);

}


}

package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.DAO.WorkshopLearnerDAO;
import com.project.Model.WorkshopLearnerModel;

@Service
public class WorkshopLearnerService {
@Autowired
WorkshopLearnerDAO logdetails;

public WorkshopLearnerService(){
	
}
public List<WorkshopLearnerModel> getAllLogin(){
	
	return logdetails.findAll();
}

public void saveLearner(WorkshopLearnerModel loglist) {
	logdetails.save(loglist);
}

public void updateLearner(WorkshopLearnerModel ll1) {
	logdetails.save(ll1);
	
}

public void deleteLearner(WorkshopLearnerModel id) {
	logdetails.delete(id);
	
}

public WorkshopLearnerModel getLearnerById(String email) {
	Optional<WorkshopLearnerModel> pm=logdetails.findById(email);
	if(pm.isPresent()) {
		//System.out.println(pm.get().getName());
		return pm.get();
	}else 
	return null;
	 
}

public void saveUser(WorkshopLearnerModel loglist) {
	// TODO Auto-generated method stub
	logdetails.save(loglist);
	
}
}

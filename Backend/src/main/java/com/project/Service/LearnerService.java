package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.project.DAO.LearnerDAO;
import com.project.Model.LearnerModel;
@Service
public class LearnerService {
	
	@Autowired
	LearnerDAO logindetails;
	
	
	public LearnerService() {
	
	}

	public List<LearnerModel> getAllLogin() {
		return logindetails.findAll();

	}
	public void saveLearner(LearnerModel loglist) {
		logindetails.save(loglist);
		
	}

	public void updateLearner(LearnerModel loglist) {
		logindetails.save(loglist);
		
	}

	public void deleteLearner(LearnerModel id) {
		logindetails.delete(id);
		
	}

	public LearnerModel getLearnerById(String email) {
		Optional<LearnerModel> pm=logindetails.findById(email);
		if(pm.isPresent()) {
			//System.out.println(pm.get().getName());
			return pm.get();
		}else 
		return null;
		 
	}

	public void saveUser(LearnerModel loglist) {
		
		logindetails.save(loglist);
		
	}

	
}

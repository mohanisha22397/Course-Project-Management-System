package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.DAO.CourseMLLearnerDAO;
import com.project.Model.CourseMLLearnerModel;

@Service
public class CourseMLLearnerService {
	@Autowired
	CourseMLLearnerDAO logdetails;
	public CourseMLLearnerService() {
		
	}
	
public List<CourseMLLearnerModel> getAllLogin(){
		
		return logdetails.findAll();
	}
	
	public void saveLearner(CourseMLLearnerModel loglist) {
		logdetails.save(loglist);
	}

	public void updateLearner(CourseMLLearnerModel ll1) {
		logdetails.save(ll1);
		
	}
	
	public void deleteLearner(CourseMLLearnerModel id) {
		logdetails.delete(id);
		
	}
	
	public CourseMLLearnerModel getLearnerById(String email) {
		Optional<CourseMLLearnerModel> pm=logdetails.findById(email);
		if(pm.isPresent()) {
			//System.out.println(pm.get().getName());
			return pm.get();
		}else 
		return null;
		 
	}

	public void saveUser(CourseMLLearnerModel loglist) {
		// TODO Auto-generated method stub
		logdetails.save(loglist);
		
	}
}

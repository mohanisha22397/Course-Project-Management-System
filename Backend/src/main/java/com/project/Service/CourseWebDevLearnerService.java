package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.DAO.CourseWebDevLearnerDAO;
import com.project.Model.CourseWebDevLearnerModel;



@Service
public class CourseWebDevLearnerService {

	@Autowired
	CourseWebDevLearnerDAO logdetails;
	public CourseWebDevLearnerService() {
		
	}
	
public List<CourseWebDevLearnerModel> getAllLogin(){
		
		return logdetails.findAll();
	}
	
	public void saveLearner(CourseWebDevLearnerModel loglist) {
		logdetails.save(loglist);
	}

	public void updateLearner(CourseWebDevLearnerModel ll1) {
		logdetails.save(ll1);
		
	}
	
	public void deleteLearner(CourseWebDevLearnerModel id) {
		logdetails.delete(id);
		
	}
	
	public CourseWebDevLearnerModel getLearnerById(String email) {
		Optional<CourseWebDevLearnerModel> pm=logdetails.findById(email);
		if(pm.isPresent()) {
			//System.out.println(pm.get().getName());
			return pm.get();
		}else 
		return null;
		 
	}

	public void saveUser(CourseWebDevLearnerModel loglist) {
		// TODO Auto-generated method stub
		logdetails.save(loglist);
		
	}
}

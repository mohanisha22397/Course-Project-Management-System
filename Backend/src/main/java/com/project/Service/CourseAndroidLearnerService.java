package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.DAO.CourseAndroidLearnerDAO;
import com.project.Model.CourseAndroidLearnerModel;

@Service
public class CourseAndroidLearnerService {
	@Autowired
	CourseAndroidLearnerDAO logdetails;
	public CourseAndroidLearnerService() {
		
	}
	
public List<CourseAndroidLearnerModel> getAllLogin(){
		
		return logdetails.findAll();
	}
	
	public void saveLearner(CourseAndroidLearnerModel loglist) {
		logdetails.save(loglist);
	}

	public void updateLearner(CourseAndroidLearnerModel ll1) {
		logdetails.save(ll1);
		
	}
	
	public void deleteLearner(CourseAndroidLearnerModel id) {
		logdetails.delete(id);
		
	}
	
	public CourseAndroidLearnerModel getLearnerById(String email) {
		Optional<CourseAndroidLearnerModel> pm=logdetails.findById(email);
		if(pm.isPresent()) {
			//System.out.println(pm.get().getName());
			return pm.get();
		}else 
		return null;
		 
	}

	public void saveUser(CourseAndroidLearnerModel loglist) {
		// TODO Auto-generated method stub
		logdetails.save(loglist);
		
	}
}

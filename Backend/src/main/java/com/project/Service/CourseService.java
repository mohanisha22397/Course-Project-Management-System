package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.DAO.CourseDAO;
import com.project.Model.CourseModel;

@Service
public class CourseService {

	@Autowired
	CourseDAO logdetails;
	public CourseService() {
		
	}
	
	public List<CourseModel> getAllLogin(){
		
		return logdetails.findAll();	
	}
	
	public void saveLearner(CourseModel loglist) {
		logdetails.save(loglist);
	}

	public void updateLearner(CourseModel ll1) {
		logdetails.save(ll1);
		
	}

	public void deleteLearner(CourseModel id) {
		logdetails.delete(id);
		
	}
}

package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.DAO.ProjectDAO;
import com.project.Model.ProjectModel;

@Service
public class ProjectService {

	@Autowired
	ProjectDAO logdetails;
	public ProjectService() {
		
	}
	
	public List<ProjectModel> getAllLogin(){
		
		return logdetails.findAll();
	}
	
	public void saveLearner(ProjectModel loglist) {
		logdetails.save(loglist);
	}

	public void updateLearner(ProjectModel ll1) {
		logdetails.save(ll1);
		
	}

	public void deleteLearner(ProjectModel id) {
		logdetails.delete(id);
		
	}
	
}

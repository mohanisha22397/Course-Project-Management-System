package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.DAO.ProjectRoboticsLearnerDAO;
import com.project.Model.ProjectRoboticsLearnerModel;

@Service
public class ProjectRoboticsLearnerService {
@Autowired
ProjectRoboticsLearnerDAO logdetails;

public ProjectRoboticsLearnerService() {

}

public List<ProjectRoboticsLearnerModel> getAllLogin(){
	
	return logdetails.findAll();
}

public void saveLearner(ProjectRoboticsLearnerModel loglist) {
	logdetails.save(loglist);
}

public void updateLearner(ProjectRoboticsLearnerModel ll1) {
	logdetails.save(ll1);
	
}

public void deleteLearner(ProjectRoboticsLearnerModel id) {
	logdetails.delete(id);
	
}

public ProjectRoboticsLearnerModel getLearnerById(String email) {
	Optional<ProjectRoboticsLearnerModel> pm=logdetails.findById(email);
	if(pm.isPresent()) {
		//System.out.println(pm.get().getName());
		return pm.get();
	}else 
	return null;
	 
}

public void saveUser(ProjectRoboticsLearnerModel loglist) {
	// TODO Auto-generated method stub
	logdetails.save(loglist);
	
}

}

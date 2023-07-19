package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.DAO.ProjectIOTLearnerDAO;
import com.project.Model.ProjectIOTLearnerModel;



@Service
public class ProjectIOTLearnerService {
@Autowired
ProjectIOTLearnerDAO logdetails;
public ProjectIOTLearnerService() {
	
}
public List<ProjectIOTLearnerModel> getAllLogin(){
	
	return logdetails.findAll();
}

public void saveLearner(ProjectIOTLearnerModel loglist) {
	logdetails.save(loglist);
}

public void updateLearner(ProjectIOTLearnerModel ll1) {
	logdetails.save(ll1);
	
}

public void deleteLearner(ProjectIOTLearnerModel id) {
	logdetails.delete(id);
	
}

public ProjectIOTLearnerModel getLearnerById(String email) {
	Optional<ProjectIOTLearnerModel> pm=logdetails.findById(email);
	if(pm.isPresent()) {
		//System.out.println(pm.get().getName());
		return pm.get();
	}else 
	return null;
	 
}

public void saveUser(ProjectIOTLearnerModel loglist) {
	// TODO Auto-generated method stub
	logdetails.save(loglist);
	
}

}

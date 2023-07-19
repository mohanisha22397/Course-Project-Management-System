package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.DAO.ProjectElectronicsLearnerDAO;
import com.project.Model.ProjectElectronicsLearnerModel;

@Service
public class ProjectElectronicsLearnerService {
@Autowired
ProjectElectronicsLearnerDAO logdetails;
public ProjectElectronicsLearnerService() {
	
}

public List<ProjectElectronicsLearnerModel> getAllLogin(){
	
	return logdetails.findAll();
}

public void saveLearner(ProjectElectronicsLearnerModel loglist) {
	logdetails.save(loglist);
}

public void updateLearner(ProjectElectronicsLearnerModel ll1) {
	logdetails.save(ll1);
	
}

public void deleteLearner(ProjectElectronicsLearnerModel id) {
	logdetails.delete(id);
	
}

public ProjectElectronicsLearnerModel getLearnerById(String email) {
	Optional<ProjectElectronicsLearnerModel> pm=logdetails.findById(email);
	if(pm.isPresent()) {
		//System.out.println(pm.get().getName());
		return pm.get();
	}else 
	return null;
	 
}

public void saveUser(ProjectElectronicsLearnerModel loglist) {
	// TODO Auto-generated method stub
	logdetails.save(loglist);
	
}


}

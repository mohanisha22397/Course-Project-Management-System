package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.DAO.KidZoneLearnerDAO;
import com.project.Model.KidZoneLearnerModel;

@Service
public class KidZoneLearnerService {
@Autowired
KidZoneLearnerDAO logdetails;

public KidZoneLearnerService() {

}

public List<KidZoneLearnerModel> getAllLogin(){
	
	return logdetails.findAll();
}

public void saveLearner(KidZoneLearnerModel loglist) {
	logdetails.save(loglist);
}

public void updateLearner(KidZoneLearnerModel ll1) {
	logdetails.save(ll1);
	
}

public void deleteLearner(KidZoneLearnerModel id) {
	logdetails.delete(id);
	
}

public KidZoneLearnerModel getLearnerById(String email) {
	Optional<KidZoneLearnerModel> pm=logdetails.findById(email);
	if(pm.isPresent()) {
		//System.out.println(pm.get().getName());
		return pm.get();
	}else 
	return null;
	 
}

public void saveUser(KidZoneLearnerModel loglist) {
	// TODO Auto-generated method stub
	logdetails.save(loglist);
	
}

}

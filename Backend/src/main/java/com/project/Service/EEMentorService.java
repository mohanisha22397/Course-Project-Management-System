package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.DAO.EEMentorDAO;
import com.project.Model.EEMentorModel;

@Service
public class EEMentorService {
@Autowired
EEMentorDAO logdetails;
public EEMentorService() {
	
}

public List<EEMentorModel> getAllLogin(){
	
	return logdetails.findAll();
}

public void saveLearner(EEMentorModel loglist) {
	logdetails.save(loglist);
}

public void updateLearner(EEMentorModel ll1) {
	logdetails.save(ll1);
	
}

/*public void deleteStudentById(int id) {
	StudentModel ss=sd.getOne(id);
	sd.delete(ss);
}*/

public void deleteLearner(EEMentorModel id) {
	logdetails.delete(id);
	
}

public EEMentorModel getLearnerById(String email) {
	Optional<EEMentorModel> pm=logdetails.findById(email);
	if(pm.isPresent()) {
		//System.out.println(pm.get().getName());
		return pm.get();
	}else 
	return null;
	 
}

public void saveUser(EEMentorModel loglist) {
	// TODO Auto-generated method stub
	logdetails.save(loglist);
	
}



}

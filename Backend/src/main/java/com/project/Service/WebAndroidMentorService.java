package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.DAO.WebAndroidMentorDAO;
import com.project.Model.WebAndroidMentorModel;

@Service
public class WebAndroidMentorService {
@Autowired
WebAndroidMentorDAO logdetails;

public WebAndroidMentorService() {
	
}

public List<WebAndroidMentorModel> getAllLogin(){
	
	return logdetails.findAll();
}

public void saveLearner(WebAndroidMentorModel loglist) {
	logdetails.save(loglist);
}

public void updateLearner(WebAndroidMentorModel ll1) {
	logdetails.save(ll1);
	
}

/*public void deleteStudentById(int id) {
	StudentModel ss=sd.getOne(id);
	sd.delete(ss);
}*/

public void deleteLearner(WebAndroidMentorModel id) {
	logdetails.delete(id);
	
}

public WebAndroidMentorModel getLearnerById(String email) {
	Optional<WebAndroidMentorModel> pm=logdetails.findById(email);
	if(pm.isPresent()) {
		//System.out.println(pm.get().getName());
		return pm.get();
	}else 
	return null;
	 
}

public void saveUser(WebAndroidMentorModel loglist) {
	// TODO Auto-generated method stub
	logdetails.save(loglist);
	
}


}

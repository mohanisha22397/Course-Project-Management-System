package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.DAO.RoboIOTMentorDAO;
import com.project.Model.RoboIOTMentorModel;

@Service
public class RoboIOTMentorService {
@Autowired
RoboIOTMentorDAO logdetails;

public RoboIOTMentorService() {

}

public List<RoboIOTMentorModel> getAllLogin(){
	
	return logdetails.findAll();
}

public void saveLearner(RoboIOTMentorModel loglist) {
	logdetails.save(loglist);
}

public void updateLearner(RoboIOTMentorModel ll1) {
	logdetails.save(ll1);
	
}

/*public void deleteStudentById(int id) {
	StudentModel ss=sd.getOne(id);
	sd.delete(ss);
}*/

public void deleteLearner(RoboIOTMentorModel id) {
	logdetails.delete(id);
	
}

public RoboIOTMentorModel getLearnerById(String email) {
	Optional<RoboIOTMentorModel> pm=logdetails.findById(email);
	if(pm.isPresent()) {
		//System.out.println(pm.get().getName());
		return pm.get();
	}else 
	return null;
	 
}

public void saveUser(RoboIOTMentorModel loglist) {
	// TODO Auto-generated method stub
	logdetails.save(loglist);
	
}

}

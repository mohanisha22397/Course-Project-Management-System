package com.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.DAO.MLMentorDAO;
import com.project.Model.MLMentorModel;

@Service
public class MLMentorService {
	@Autowired
	MLMentorDAO logdetails;
	public MLMentorService() {
		
	}

	public List<MLMentorModel> getAllLogin(){
		
		return logdetails.findAll();
	}

	public void saveLearner(MLMentorModel loglist) {
		logdetails.save(loglist);
	}

	public void updateLearner(MLMentorModel ll1) {
		logdetails.save(ll1);
		
	}

	/*public void deleteStudentById(int id) {
		StudentModel ss=sd.getOne(id);
		sd.delete(ss);
	}*/

	public void deleteLearner(MLMentorModel id) {
		logdetails.delete(id);
		
	}

	public MLMentorModel getLearnerById(String email) {
		Optional<MLMentorModel> pm=logdetails.findById(email);
		if(pm.isPresent()) {
			//System.out.println(pm.get().getName());
			return pm.get();
		}else 
		return null;
		 
	}

	public void saveUser(MLMentorModel loglist) {
		// TODO Auto-generated method stub
		logdetails.save(loglist);
		
	}
}

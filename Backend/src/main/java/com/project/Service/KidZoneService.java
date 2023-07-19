package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.DAO.KidZoneDAO;
import com.project.Model.KidZoneModel;

@Service
public class KidZoneService {
@Autowired
KidZoneDAO logdetails;

public KidZoneService() {
	
}

public List<KidZoneModel> getAllLogin(){
	
	return logdetails.findAll();
}

public void saveLearner(KidZoneModel loglist) {
	logdetails.save(loglist);
}

public void updateLearner(KidZoneModel ll1) {
	logdetails.save(ll1);
	
}

public void deleteLearner(KidZoneModel id) {
	logdetails.delete(id);
	
}
}

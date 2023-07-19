package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.DAO.WorkshopDAO;
import com.project.Model.WorkshopModel;

@Service
public class WorkshopService {
@Autowired
WorkshopDAO logdetails;

public WorkshopService() {
	
}

public List<WorkshopModel > getAllLogin(){
	
	return logdetails.findAll();
}

public void saveLearner(WorkshopModel loglist) {
	logdetails.save(loglist);
}

public void updateLearner(WorkshopModel  ll1) {
	logdetails.save(ll1);
	
}

public void deleteLearner(WorkshopModel id) {
	logdetails.delete(id);
	
}
}

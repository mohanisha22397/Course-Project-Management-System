package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.DAO.FeesDAO;
import com.project.Model.FeesModel;



@Service
public class FeesService {
@Autowired
FeesDAO logdetails;
public FeesService() {
	
}

public List<FeesModel> getAllLogin(){
	
	return logdetails.findAll();
}

public void saveStudent(FeesModel loglist) {
	logdetails.save(loglist);
}

}

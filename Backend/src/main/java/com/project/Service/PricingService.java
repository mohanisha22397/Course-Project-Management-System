package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.DAO.PricingDAO;
import com.project.Model.PricingModel;

@Service
public class PricingService {

	@Autowired
	PricingDAO logdetails;
	public PricingService() {
		
	}
	
	public List<PricingModel> getAllLogin(){
		
		return logdetails.findAll();
	}
	
	public void saveLearner(PricingModel loglist) {
		logdetails.save(loglist);
	}

	
}

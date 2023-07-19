package com.project.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Model.PricingModel;

public interface PricingDAO extends JpaRepository<PricingModel,String> {

}

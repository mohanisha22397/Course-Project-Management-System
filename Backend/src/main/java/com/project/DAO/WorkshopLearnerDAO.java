package com.project.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Model.WorkshopLearnerModel;

public interface WorkshopLearnerDAO extends JpaRepository<WorkshopLearnerModel, String> {
	Optional<WorkshopLearnerModel> findById(String email);

	WorkshopLearnerModel findByEmail(String email);
}


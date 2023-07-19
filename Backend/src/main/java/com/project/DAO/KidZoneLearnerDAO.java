package com.project.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Model.KidZoneLearnerModel;

public interface KidZoneLearnerDAO extends JpaRepository< KidZoneLearnerModel, String> {
	Optional<KidZoneLearnerModel> findById(String email);

	KidZoneLearnerModel findByEmail(String email);
}


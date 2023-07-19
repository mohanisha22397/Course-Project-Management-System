package com.project.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Model.LearnerModel;

public interface LearnerDAO extends JpaRepository<LearnerModel,String> {


//	public StudentModel findByEmail(String email);
//
//	public StudentModel findByEmailAndPassword(String email, String password);

	Optional<LearnerModel> findById(String email);

	LearnerModel findByEmail(String email);

	
}

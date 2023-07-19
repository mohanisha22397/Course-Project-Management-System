package com.project.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Model.EEMentorModel;


public interface EEMentorDAO extends JpaRepository<EEMentorModel,String>{

//	public StudentModel findByEmail(String email);
//
//	public StudentModel findByEmailAndPassword(String email, String password);

	Optional<EEMentorModel> findById(String email);

	EEMentorModel findByEmail(String email);

}

package com.project.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Model.MLMentorModel;

public interface MLMentorDAO extends JpaRepository<MLMentorModel,String>{

//	public StudentModel findByEmail(String email);
//
//	public StudentModel findByEmailAndPassword(String email, String password);

	Optional<MLMentorModel> findById(String email);

	MLMentorModel findByEmail(String email);

}

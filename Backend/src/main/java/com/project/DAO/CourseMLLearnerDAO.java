package com.project.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Model.CourseMLLearnerModel;

public interface CourseMLLearnerDAO extends JpaRepository<CourseMLLearnerModel,String>{
	Optional<CourseMLLearnerModel> findById(String email);

	CourseMLLearnerModel findByEmail(String email);
}


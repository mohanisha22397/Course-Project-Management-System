package com.project.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Model.CourseWebDevLearnerModel;

public interface CourseWebDevLearnerDAO extends JpaRepository<CourseWebDevLearnerModel,String> {
	Optional<CourseWebDevLearnerModel> findById(String email);

	CourseWebDevLearnerModel findByEmail(String email);
}

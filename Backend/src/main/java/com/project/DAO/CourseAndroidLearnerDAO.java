package com.project.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Model.CourseAndroidLearnerModel;

public interface CourseAndroidLearnerDAO extends JpaRepository<CourseAndroidLearnerModel, String> {
	Optional<CourseAndroidLearnerModel> findById(String email);

	CourseAndroidLearnerModel findByEmail(String email);
}

package com.project.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Model.ProjectIOTLearnerModel;

public interface ProjectIOTLearnerDAO extends JpaRepository<ProjectIOTLearnerModel,String>{
	Optional<ProjectIOTLearnerModel> findById(String email);

	ProjectIOTLearnerModel findByEmail(String email);
}

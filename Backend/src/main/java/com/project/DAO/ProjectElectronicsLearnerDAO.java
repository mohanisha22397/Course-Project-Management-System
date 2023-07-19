package com.project.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.Model.ProjectElectronicsLearnerModel;

public interface ProjectElectronicsLearnerDAO extends JpaRepository <ProjectElectronicsLearnerModel,String> {
	Optional<ProjectElectronicsLearnerModel> findById(String email);

	ProjectElectronicsLearnerModel findByEmail(String email);
}
